import styles from './nav.module.css';

export default function Nav() {
  return (
    <nav class={styles.nav}>
      <ul>
        <li class={styles.logo}><a href="/"><img src="https://dummyimage.com/125x25" /></a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Clients</a></li>
        <li><a href="#">Candidates</a></li>
      </ul>
    </nav>
  )
}