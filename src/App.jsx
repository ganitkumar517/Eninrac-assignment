import React from 'react'
import Index from './components/Navigation/Index'
import HeroContainer from './components/Hero/Index'
import Decore from "./assets/Decore.svg"

export default function App() {
  return (
    <div className='fixed left-0 right-0' >
      <img src={Decore} className='absolute right-[-90px] top-[-100px] z-0'></img>
      <Index />
      <HeroContainer />
    </div>
  )
}
