import React from 'react'
import OfferCard from '../../components/Simple/OfferCard'
import styles from './styles.module.scss'

export default function Offers() {
  return (
    <>
      
      <div className={styles.offers}>
  
      <div className={styles.why_card}>
        <h4 className={styles.sub_title}>Committed to improvement</h4>
        <h2 className={styles.title}>Why Empact Data</h2>
        <p  className={styles.para}>Our goal is to save you time by providing your organization with insight into your data.</p>
      </div>

      <div className={styles.card_group}>
        <OfferCard 
          title={"Understand Your Data"}
          sub_title={"Transparency"}
          para={"empact is a customizable Real-time | Open-Sourced platform where foundations and institutions can visualize, measure, and understand data and analytics with strategic insights."}
          link={"https://zcal.co/empactdata/Foundation30"}
          img={"https://i.imgur.com/ZLHHZgN.png"}
          cta={"Schedule Call"}
        />
        <OfferCard 
          title={"Constantly Improving"}
          sub_title={"Connected"}
          para={"Empact brings data and analytics together to provide grant makers with knowledge about their initiatives and impact not available from any other app or platform."}
          link={"https://forms.gle/akvbTLxHaK5sb1EB7"}
          img={"https://i.imgur.com/WR7Cota.png"}
          cta={"Contact Us"}
        />
        <OfferCard 
          title={"Save Resources"}
          sub_title={"Focused"}
          para={"By gaining insight you are able to quickly adapt and improve, with our analysis you can take your impact to the next level, without any second guesses."}
          link={"https://empact-data.vercel.app/"}
          img={"https://i.imgur.com/1sTLRFd.png"}
          cta={"Demo"}
        />
      </div>

      <div className={styles.bg_img}/>
    </div>
    </>
    
  )
}
