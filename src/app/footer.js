import Image from 'next/image';
import styles from './footer.module.css'
import SearchAndSendLogo from '../../public/logos/sf-gray.svg'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <hr />
      <div className={styles.row}>
        <Image
            priority
            className={styles.logo}
            src={SearchAndSendLogo}
            alt="Search and Send by Staffing Fitness"
          />
        <div>
          <p>Recruit Staff</p>
          <ul>
            <li><a href="https://www.staffingfitness.com/jobs">Find a Job</a></li>
            <li><a href="https://www.staffingfitness.com/health-insurance">Health Insurance</a></li>
            <li><a href="https://www.staffingfitness.com/recruit-staff">For Studio Owners</a></li>
            <li><a href="https://www.staffingfitness.com/about-us">About Us</a></li>
            <li><a href="https://www.staffingfitness.com/contact-us">Contact Us</a></li>
          </ul>
        </div>
        <div>
          <p>Social Media</p>
          <ul>
            <li><a href="https://www.facebook.com/staffingfitness/">Facebook</a></li>
            <li><a href="https://www.instagram.com/staffingfitness/?hl=en">Instagram</a></li>
            <li><a href="https://www.staffingfitness.com/#">X</a></li>
            <li><a href="https://www.linkedin.com/company/staffing-fitness/">LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <div className="row">
        <p className={styles.copyright}>Copyright Staffing Fitness {new Date().getFullYear()}. All rights reserved.</p>
      </div>
    </footer>
  )
}