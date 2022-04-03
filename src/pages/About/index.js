import React from 'react'
import AboutCard from '../../components/Layout/AboutCard'
import { introductions } from '../../constants/data/introductions'
import { Link } from 'react-router-dom'
import styles from './styles.module.scss'

export default function About() {
  return (
    <div className={styles.about_wrapper}>
      <div className={styles.top}>
        <h2 className={styles.title}>Meet the devs</h2>

        <div className={styles.dev_grid}>
        {introductions.map((intro) => {
          return (<AboutCard title={intro.title} img={intro.image} para={intro.introduction} position={intro.position}/>)
        })}
        </div>
      </div>
      

      <div className={styles.background}/>
    </div>
  )
}
