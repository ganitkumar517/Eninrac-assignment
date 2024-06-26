import React, { useEffect } from 'react'
import Nav from './components/Navigation/Index'
import HeroContainer from './components/Hero/Index'
import Decore from "./assets/Decore.svg"
import Service from './components/Service/Index'
import Destination from './components/Destinations/Index'
import Booking from './components/Booking/Index'
import Testimonial from './components/Testimonial/Index'
import Logos from './components/Logos/Index'
import Subscribe from './components/Subscribe/Index'
import Footer from './components/Footer/Index'

export default function App() {

  return (
    <div className='absolute left-0 right-0 h-fill-available overflow-y-auto overflow-x-hidden flex flex-col gap-[123px] ' >
      <img src={Decore} className='absolute right-[-90px] top-[-100px] z-0'></img>
      <Nav />
      <HeroContainer />
      <Service />
      <Destination />
      <Booking />
      <Testimonial />
      <Logos />
      <Subscribe />
      <Footer />
    </div>
  )
}
