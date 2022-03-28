import React from 'react'
import styles from './styles.module.scss'

export default function OfferCard(props) {
  return (
    <div className={styles.card}>
      <div className={styles.top}>
        <h3 className={styles.sub_title}>{props.sub_title}</h3>
        <h2 className={styles.title}>{props.title}</h2>
        <p className={styles.para}>{props.para}</p>
      </div>
      

      <div className={styles.bottom}>
        <img className={styles.img} src={props.img} alt={props.title}></img>
        <a className={styles.link} rel="noreferrer" target={"_blank"}>
          <button className={styles.btn}>{props.cta}</button>
        </a>
      </div>
      
    </div>
  )
}
