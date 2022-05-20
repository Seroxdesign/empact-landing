import React from 'react'
import Logo from '../../components/Simple/Logo'
import styles from './styles.module.scss'

export default function Landing() {
  return (
    <main className={styles.landing_wrapper}>
      <div className={styles.landing_background}/>
      <div>
        <Logo />
        <h3 className={styles.sub_title}>SOLUTIONS THAT EMPOWER IMPACT</h3>
        <h2 className={styles.title}>Collaboration made simple.</h2>
        <p className={styles.para}>
          Understand the impact of your social investment. 
          <br></br>
          Get Empact Reports and Create dashboards that track the outcomes of your grantmaking initiatives.
        </p>
        <a href="https://forms.gle/akvbTLxHaK5sb1EB7" rel="noreferrer" target={"_blank"}>
          <button className={styles.btn}>
            Request Demo
          </button>
        </a>
        
      </div>

      <div>
        <img src={"https://i.imgur.com/IpTYscn.png"} alt={"product preview"} className={styles.img}></img>
      </div>
    </main>
  )
}
