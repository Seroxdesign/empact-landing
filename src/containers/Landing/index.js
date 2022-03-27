import React from 'react'
import styles from './styles.module.scss'

export default function Landing() {
  return (
    <main className={styles.landing_wrapper}>
      <div>
        <h2 className={styles.title}>Collaboration made simple.</h2>
        <p className={styles.para}>A better way to organise your projects.</p>
        <a href="https://discord.gg/vP78a45DAT" target={"_blank"}>
          <button className={styles.btn}>
            Join waitlist
          </button>
        </a>
        
      </div>

      <div>
        <img src={"https://i.imgur.com/OBCPjWW.jpg"} className={styles.img}></img>
      </div>
    </main>
  )
}
