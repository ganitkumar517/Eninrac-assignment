import React from 'react'
import NavBar from './NavBar'
import Logo from '../../assets/Logo.svg'
export default function Index() {
    return (
        <div className='relative top-0 right-0 left-0 py-12 flex items-center justify-between px-36 '>
            <img src={Logo}></img>
            <NavBar />
        </div>
    )
}
