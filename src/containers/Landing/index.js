import React from 'react'
import Logo from '../../components/Simple/Logo'
import styles from './styles.module.scss'

export default function Landing() {
  return (
    <main className={styles.landing_wrapper}>
      <div className={styles.landing_background}/>
      <div>
        <Logo />
        <h3 className={styles.sub_title}>Free yourself from technical debt.</h3>
        <h2 className={styles.title}>Collaboration made simple.</h2>
        <p className={styles.para}>
          A better way to organise your projects.
          <br></br>
          Decentra is the future of social collaboration tools, providing users everything 
          <br></br>
          they need to create fully functional projects.
        </p>
        <a href="https://discord.gg/vP78a45DAT" rel="noreferrer" target={"_blank"}>
          <button className={styles.btn}>
            Join waitlist
          </button>
        </a>
        
      </div>

      <div>
        <img src={"https://i.imgur.com/OBCPjWW.jpg"} alt={"product preview"} className={styles.img}></img>
      </div>
    </main>
  )
}
