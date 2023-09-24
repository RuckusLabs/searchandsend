import Image from 'next/image';
import SearchAndSendLogo from '../../public/logos/searchandsend.svg'
import SearchAndSendMini from '../../public/logos/searchandsendmini.svg'
import IconSearch from '../../public/icons/icon-search.svg'
import IconCheck from '../../public/icons/icon-check.svg'
import IconSmile from '../../public/icons/icon-smile.svg'
import IconRightArrow from '../../public/icons/icon-arrow-right.svg'
import IconPlus from '../../public/icons/icon-plus.svg'
import Nav from './nav'
import Footer from './footer'
import styles from './page.module.css'
import button from './button.module.css'

export default function Home() {
  return (
    <>
      <Nav />
      <main className={styles.main}>

        <section className={styles.intro}>
          <h1>
          <Image
            priority
            className={styles.introLogo}
            src={SearchAndSendLogo}
            alt="Search and Send by Staffing Fitness"
          /></h1>
          <h2 className={styles.heading}>You've found your studio's competitive edge.</h2>
          <a href="#" className={button.button}>Learn more <Image
            priority
            alt="Right arrow icon"
            src={IconRightArrow}
          /></a>
          <Image className={styles.introImage1} src="/images/image-woman-stairs.jpg" alt="A woman running up bleacher stairs" width="416" height="655"/>
          <Image className={styles.introImage2} src="/images/image-man.jpg" alt="A man doing a pullup" width="416" height="655"/>
        </section>

        <section>
          <h3>Skip the noise and hire the best</h3>
          <p>Staffing Fitness' <Image priority className={styles.miniLogo} src={SearchAndSendMini} alt="Search and Send by Staffing Fitness" /> system helps personalize your recruitment strategy when hiring quality coaches and staff for your studio.</p>
          <p>We believe in the quality of our candidates, not the quanity of resumes we deliver to you.</p>
        </section>

        <section>
          <article>
            <Image
              priority
              src={IconSearch}
              alt="Search icon"
            />
            <h3>We may already have who you're looking for.</h3>
            <hr />
            <p>Staffing Fitness' Search & Send system helps personalize your recruitment strategy when hiring quality coaches and staff for your studio.</p>
            <p>We believe in the quality of our candidates, not the quanity of resumes we deliver to you.</p>
          </article>
          <article>
            <Image
              priority
              src={IconCheck}
              alt="Checkmark icon"
            />
            <h3>Signed, sealed, and delivered.</h3>
            <hr />
            <p>We'll handle all the paperwork to make sure your new hire is ready to make an impact on their first day.</p>
          </article>
          <article>
            <Image
              priority
              src={IconSmile}
              alt="Smile icon"
            />
            <h3>Take the stress out of it.</h3>
            <hr />
            <p>We take care of the hard part of identifying and interviewing potential candidates with our detailed vetting process that's tailored to your specific needs. We only send candiates we genuinely think you'll love.</p>
          </article>
          <a href="" className={`${button.button} ${button.stickyButton}`}>Schedule Consultation <Image
            priority
            alt="Plus icon"
            src={IconPlus}
          /></a>
        </section>
        <Footer />
      </main>
    </>
  )
}

