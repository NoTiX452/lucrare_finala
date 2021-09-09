import React from 'react'
import styles from './About.module.css'
import Head from 'next/head'

export default function About() {
    return (
        <div className={styles.container}>
            <Head>
                <title>About</title>
                <link rel='icon' href='/favicon.ico'></link>
            </Head>
            <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
    )
}
