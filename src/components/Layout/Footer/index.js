import React from 'react'
import styles from './styles.module.scss'

export default function Footer() {
  return (
    <footer className={styles.footer_wrapper}>
      <div className={styles.footer_nav}>
        <div className={styles.column}>
          <h3 className={styles.title}>Decentra</h3>
          <p className={styles.para}>
            The future of community building, growing and collaboration. Don't let the clutter of the past hold you back.
            Get started swiftly & easily by importing a demo of your choice in a single click. Build your website using a fully visual interface
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
                <a className={styles.link} href={"https://discord.com/invite/vP78a45DAT"} target={"_blank"}>Discord Community</a>
              </li>
              <li className={styles.list_item}>
                <a className={styles.link} href={""} target={"_blank"}>Whitepaper</a>
              </li>
              <li className={styles.list_item}>
                <a className={styles.link} href={""} target={"_blank"}>Docs</a>
              </li>
            </ul>
            <ul className={styles.link_list}>
              <li className={styles.list_item}>
                <a className={styles.link} href={""} target={"_blank"}>Contact Us</a>
              </li>
              <li className={styles.list_item}>
                <a className={styles.link} href={"https://discord.com/invite/vP78a45DAT"} target={"_blank"}>Discord Community</a>
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
        <h3 className={styles.title}>Developers</h3>
          <ul className={styles.list_creators}>
            <li className={styles.list_item_col}>
              <a target={"_blank"} href={"https://twitter.com/danftz"} className={styles.creator_card}>
                <img src={"https://i.imgur.com/ORdb6nb.png"} alt={""} className={styles.avatar}></img>
                <h4>
                  Daniel
                </h4>
                <h5>Product manager</h5>
              </a>
            </li>
            <li className={styles.list_item_col}>
              <a href={"https://twitter.com/CompluW"} target={"_blank"} className={styles.creator_card}>
                <img src={"https://i.imgur.com/rThCj8I.jpg"} alt={""} className={styles.avatar}></img>
                <h4>
                  Jose
                </h4>
                <h5>Developer</h5>
              </a>
            </li>
            <li className={styles.list_item_col}>
              <a href={"https://twitter.com/seroxdesigns"} target={"_blank"} className={styles.creator_card}>
                <img src={"https://i.imgur.com/kgtAHKS.jpg"} alt={""} className={styles.avatar}></img>
                <a>
                  Sero
                </a>
                <h5>Developer</h5>
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
