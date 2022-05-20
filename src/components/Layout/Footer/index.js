import React from 'react'
import styles from './styles.module.scss'

export default function Footer() {
  return (
    <footer className={styles.footer_wrapper}>
      <div className={styles.footer_nav}>
        <div className={styles.column}>
          <h3 className={styles.title}>Decentra</h3>
          <p className={styles.para}>
            The future of social impact spending is here, it's time to create real change.
          </p>
        </div>
        <div className={styles.column}>
          <h3 className={styles.title}>Links</h3>

          <div className={styles.grid}>
            <ul className={styles.link_list}>
              <li className={styles.list_item}>
                <a className={styles.link} href={""} target={"_blank"}>Contact Us</a>
              </li>
              <li className={styles.list_item}>
                <a className={styles.link} href={""} target={"_blank"}>Discord Community</a>
              </li>
              <li className={styles.list_item}>
                <a className={styles.link} href={""} target={"_blank"}>Whitepaper</a>
              </li>
              <li className={styles.list_item}>
                <a className={styles.link} href={""} target={"_blank"}>Docs</a>
              </li>
            </ul>
          </div>
         
        </div>

        <div className={styles.column}>
        <h3 className={styles.title}>Meet the team</h3>
          <ul className={styles.list_creators}>
            <li className={styles.list_item_col}>
              <a target={"_blank"} href={"https://twitter.com/seroxdesigns"} className={styles.creator_card}>
                <img src={"https://i.imgur.com/XjD274k.jpg"} alt={"Sherif Cherfa"} className={styles.avatar}></img>
                <h4>
                  Sherif Cherfa
                </h4>
                <h5>Lead Software Engineer</h5>
              </a>
            </li>
            <li className={styles.list_item_col}>
              <a href={"https://twitter.com/CompluW"} target={"_blank"} className={styles.creator_card}>
                <img src={"https://empactdata.com/wp-content/uploads/2021/08/28e195_d5b487f657f84185a6f299eedd75cb23_mv2-1.png"} alt={"Monique Curry"} className={styles.avatar}></img>
                <h4>
                  Monique Curry-Mims
                </h4>
                <h5>Founder and CEO</h5>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.footer_rights}>

      </div>
    </footer>
  )
}
