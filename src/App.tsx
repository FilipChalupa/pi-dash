import type { Component } from 'solid-js'
import './global.css'
import { Input } from './Input'
import { Layout } from './Layout'
import { Track } from './Track'

export const App: Component = () => {
	return (
		<>
			<Layout>
				<h1>Pi Dash</h1>
				<Track />
				<Input />
			</Layout>
		</>
	)
}
