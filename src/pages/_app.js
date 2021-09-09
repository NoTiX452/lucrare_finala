import '../styles/globals.css';
import styles from '../styles/MyApp.module.css';
import Link from 'next/link';
import Image from 'next/image'
function MyApp({ Component, pageProps }) {
  return(
    <>
    <nav className={styles.navbar}>
      <ui className={styles.navbarContactBox}>
        <Link href="/"><a>
        <div className={styles.brand}>
          <Image src='/assets/images/dog.svg' alt='brand' />
          <p>Friends Forever</p>
        </div>
        </a></Link>
        <Link href='/'><a><li className={styles.navbarContact}>Home</li></a></Link>
        <Link href='/about'><a><li className={styles.navbarContact}>About</li></a></Link>
      </ui>
    </nav>
    <div className={styles.container}>
      <Component{...pageProps}/>
    </div>

    </>
  )
}

export default MyApp
