import {
	Accessor,
	Component,
	createEffect,
	createMemo,
	createSignal,
	onCleanup,
} from 'solid-js'
import { LastInput } from './App'
import styles from './Track.module.css'

export interface TrackProps {
	lastInput: Accessor<LastInput>
}

export const Track: Component<TrackProps> = ({ lastInput }) => {
	const [time, setTime] = createSignal(new Date().getTime())
	const [beforeLastInput] = createSignal({
		value: lastInput(),
	})
	const [jumpTime, setJumpTime] = createSignal(0)
	const characterPositionX = 0.2
	const flyDuration = 500
	const characterPositionY = createMemo(() => {
		const timeSinceLastJump = time() - jumpTime()
		if (timeSinceLastJump > flyDuration) {
			return 0
		}
		return 1 - Math.pow(timeSinceLastJump / flyDuration, 4)
	})

	createEffect(() => {
		if (lastInput() === null) {
			return
		}
		const before = beforeLastInput()
		if (before.value?.time ?? 0 < lastInput().time) {
			before.value = lastInput()
			console.log('new value in track', lastInput().value)
			setJumpTime(lastInput().time)
		}
	})

	createEffect(() => {
		let timer: number
		const loop = () => {
			timer = requestAnimationFrame(() => {
				setTime(new Date().getTime())
				loop()
			})
		}

		loop()

		onCleanup(() => {
			cancelAnimationFrame(timer)
		})
	})

	return (
		<div class={styles.wrapper}>
			<div
				class={styles.character}
				style={{
					['--Track-x']: `${characterPositionX}`,
					['--Track-y']: `${characterPositionY()}`,
				}}
			/>
			<div
				class={styles.obstacle}
				style={{
					['--Track-x']: `0.7`,
				}}
			/>
		</div>
	)
}
