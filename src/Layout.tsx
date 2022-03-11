import { Component } from 'solid-js'
import styles from './Layout.module.css'

export const Layout: Component = ({ children }) => {
	return <div class={styles.wrapper}>{children}</div>
}
