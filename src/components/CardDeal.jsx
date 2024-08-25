import React from 'react'
import { card } from '../assets'
import styles , {layout} from '../style'
import Button from './Button'

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Find a better <br className='sm:block hidden'/> card deal in few easy setps.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mr-5`}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui minus ratione maiores, similique voluptate exercitationem autem dolore deserunt officiis assumenda ad! Ipsam odio quaerat architecto neque nam incidunt quibusdam pariatur.
        </p>
      <Button styles='mt-10 '/>
      </div>

      <div className={layout.sectionImg}>
        <img src={card} alt="card" className='w-full h-full '/>
      </div>
    </section>
  )
}

export default CardDeal