import Image from 'next/image';
import styles from './nav.module.css';
import Logo from '../../public/logos/sf-white.svg';

export default function Nav() {
  return (
    <a href="https://www.staffingfitness.com" className={styles.nav} aria-label="Go back to StaffingFitness.com.">
      ← Back to
      <Image
        priority
        className={styles.linkLogo}
        src={Logo}
        alt="StaffingFitness.com"
      />
    </a>
  )
}