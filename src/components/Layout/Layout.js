import React, { children } from 'react'
import styles from './Layout.module.css'
import Head from 'next/head'
export default function Layout({children}) {
    return (
        <div className={styles.container}>
            <Head>
                <title>Dogs</title>
                <link rel='icon' href='/favicon.ico'/>
            </Head>
            <main className={styles.main}>
                {children}
            </main>
            <footer className={styles.footer}>Made by NoTiX</footer>
        </div>
    )
}