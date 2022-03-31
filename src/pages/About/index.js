import React from 'react'
import AboutCard from '../../components/Layout/AboutCard'
import { Link } from 'react-router-dom'
import styles from './styles.module.scss'

export default function About() {
  return (
    <div className={styles.about_wrapper}>
      <h2 className={styles.title}>Meet the devs</h2>

      <div className={styles.dev_grid}>
        <AboutCard />
        <AboutCard />
        <AboutCard />
      </div>
    </div>
  )
}
