import { Component } from 'solid-js'
import styles from './Track.module.css'

export const Track: Component = () => {
	const characterPositionX = 0.2
	const characterPositionY = 0

	return (
		<div class={styles.wrapper}>
			<div
				class={styles.character}
				style={{
					['--Track-x']: `${characterPositionX}`,
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
