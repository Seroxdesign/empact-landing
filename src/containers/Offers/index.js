import React from 'react'
import OfferCard from '../../components/Simple/OfferCard'
import styles from './styles.module.scss'

export default function Offers() {
  return (
    <>
      
      <div className={styles.offers}>
  
      <div className={styles.why_card}>
        <h4 className={styles.sub_title}>Committed to improvement</h4>
        <h2 className={styles.title}>Why Decentra</h2>
        <p  className={styles.para}>Our goal is to save you time by providing an organisational toolkit and collaboration platform.</p>
      </div>

      <div className={styles.card_group}>
        <OfferCard 
          title={"Platform Agnostic"}
          sub_title={"Decentralised"}
          para={"By allowing users to log in with their wallet, and having the option to link roles and permissions in the community to (non)-transferable tokens, both the hierarchical position and identity of users can be preserved if the community decided to migrate to another platform. Furthermore, we plan to use the Arweave data storage protocol to store user content."}
          link={"https://discord.gg/vP78a45DAT"}
          img={"https://i.imgur.com/ZLHHZgN.png"}
          cta={"Learn More"}
        />
        <OfferCard 
          title={"Social Collaboration"}
          sub_title={"Connected"}
          para={"We want to combine many features typically found in project management tools with our community tools in a more open setting - because we believe that DAOs need a tool that meets their needs for an unparalleled level of transparency with their community members."}
          link={"https://discord.gg/vP78a45DAT"}
          img={"https://i.imgur.com/WR7Cota.png"}
          cta={"Join Discord"}
        />
        <OfferCard 
          title={"Asynchronous"}
          sub_title={"Focused"}
          para={"We prioritize threaded conversations so that important topics don't get lost in the chaos of chat messages. Stay up to date and participate in conversations exactly when it fits your schedule."}
          link={"https://forms.gle/v8Z4bVbSuweDRDcLA"}
          img={"https://i.imgur.com/1sTLRFd.png"}
          cta={"Contact Us"}
        />
      </div>

      <div className={styles.bg_img}/>
    </div>
    </>
    
  )
}
