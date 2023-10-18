import React from 'react'
import Hero from '../components/Hero/Hero'
import Populer from '../components/Populer/Populer'
import Offer from '../components/Offers/Offer'
import NewCollection from '../components/NewCollections/NewCollection'
import NewsLetter from '../components/NewsLetter/NewsLetter'

const Shop = () => {
  return (
    <div>
        <Hero/>
        <Populer/>
        <Offer/>
        <NewCollection/>
        <NewsLetter/>
    </div>
  )
}

export default Shop