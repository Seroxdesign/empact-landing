import React from 'react'
import Navbar from '../../components/Layout/Navbar'
import Landing from '../../containers/Landing'
import styles from './styles.module.scss'

export default function Home() {
  return (
    <div className={styles.page_wrapper}>
      <Navbar />
      <Landing />
    </div>
  )
}
