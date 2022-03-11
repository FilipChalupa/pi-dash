import { Component, createEffect, createSignal } from 'solid-js'
import styles from './Input.module.css'

export const Input: Component = () => {
	const [value, setValue] = createSignal('')

	createEffect(() => {
		if (value().length === 1) {
			console.log('new value', value())
		}
	})

	return (
		<div class={styles.wrapper}>
			<input
				class={styles.input}
				autofocus
				type="number"
				value={value()}
				onInput={(event) => {
					const lastCharacter = parseInt(
						event.currentTarget.value.slice(-1),
						10,
					)
					setValue('-1')
					if (Number.isNaN(lastCharacter)) {
						setValue('')
					} else {
						setValue(lastCharacter.toString())
					}
				}}
			/>
		</div>
	)
}
