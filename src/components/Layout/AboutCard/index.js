import React from 'react'
import styles from './styles.module.scss'

export default function AboutCard(props) {
  return (
    <div className={styles.card}>

      <div className={styles.card_top}>
        <div className={styles.card_details}>
          <img src={props.img} alt={props.title} className={styles.img}></img>

          <div>
          <h2 className={styles.title}>{props.title}</h2>
          <h3 className={styles.title_position}>{props.position}</h3>
          </div>

        </div>
        

        <p className={styles.para}>
          {props.para}
        </p>
      </div>

      <div className={styles.bottom_card}>
        <a href={props.link} target={"_blank"}>
          <button>Contact</button>
        </a>
      </div>
    </div>
  )
}
