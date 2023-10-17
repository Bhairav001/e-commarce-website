import React from 'react'
import Hero from '../components/Hero/Hero'
import Populer from '../components/Populer/Populer'
import Offer from '../components/Offers/Offer'
import NewCollection from '../components/NewCollections/NewCollection'

const Shop = () => {
  return (
    <div>
        <Hero/>
        <Populer/>
        <Offer/>
        <NewCollection/>
    </div>
  )
}

export default Shop