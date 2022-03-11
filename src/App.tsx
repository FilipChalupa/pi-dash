import { Component, createSignal } from 'solid-js'
import './global.css'
import { Input } from './Input'
import { Layout } from './Layout'
import { Track } from './Track'

export type LastInput = null | {
	value: string
	time: number
}

export const App: Component = () => {
	const [lastInput, setLastInput] = createSignal<LastInput>(null)

	return (
		<>
			<Layout>
				<h1>Pi Dash</h1>
				<Track lastInput={lastInput} />
				<Input
					onInput={(value) => {
						setLastInput({
							value,
							time: new Date().getTime(),
						})
					}}
				/>
			</Layout>
		</>
	)
}
