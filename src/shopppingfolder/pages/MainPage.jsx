import React, { useState } from 'react'
import Banner from '../components/Banner'
import Header from '../components/Header'
import Collections from '../components/Collections'
import Footer from '../components/Footer'
import { Gents } from '../data'
import {Ladies} from '../data'
import WomanCollections from '../components/WomanCollections'


const MainPage = () => {
  const [gentsFashion,setGentsFashion] = useState(Gents)
  console.log(Gents)
const [ladiesFashion,setLadiesFashion]= useState(Ladies)
console.log(Ladies)

  return (
    <div>
        <Header />
        <Banner />
        <Collections gentsFashion={gentsFashion} />
        <WomanCollections ladiesFashion={ladiesFashion}/>
        <Footer/>
    </div>
  )
}

export default MainPage