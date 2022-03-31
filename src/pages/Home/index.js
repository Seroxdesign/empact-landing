import React from 'react'
import Footer from '../../components/Layout/Footer'
import Navbar from '../../components/Layout/Navbar'
import Landing from '../../containers/Landing'
import Offers from '../../containers/Offers'
import styles from './styles.module.scss'

export default function Home() {
  return (
    <div className={styles.page_wrapper}>
      <Navbar />
      <Landing />
      <Offers />
      <Footer />
    </div>
  )
}
