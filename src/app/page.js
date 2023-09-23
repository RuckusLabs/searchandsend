import Image from 'next/image'
import Nav from './nav'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <Nav />
      <h1>Staffing Fitness</h1>
    </main>
  )
}
