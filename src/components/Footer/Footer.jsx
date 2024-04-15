import React from 'react'
import Facebook from "../../assets/logos/facebook.svg"
import Tweeter from "../../assets/logos/tweeter.svg"
import Playstore from "../../assets/logos/playstore.svg"
import Appstore from "../../assets/logos/appstore.svg"


export default function Footer() {
    return (
        <footer className='flex justify-between items-center pb-20'>
            <div>
                <h1 className='text-[#181E4B] text-[44px] '>Jadoo.</h1>
                <p className='w-[207px] text-[#5E6282]'>Book your trip in minute, get full Control for much longer.</p>
            </div>
            <div className='text-center'>
                <h3 className='text-[#080809] mb-4'>Company</h3>
                <nav className='flex flex-col'>
                    <a href="#about" className="px-4 py-2 text-[#5E6282]">About</a>
                    <a href="#careers" className="px-4 py-2 text-[#5E6282]">Careers</a>
                    <a href="#mobile" className="px-4 py-2 text-[#5E6282]">Mobile</a>
                </nav>
            </div >
            <div className='text-center'>
                <h3 className='text-[#080809] mb-4'>Contact</h3>
                <nav className='flex flex-col'>
                    <a href="#help" className="px-4 py-2 text-[#5E6282]">Help/FAQ</a>
                    <a href="#press" className="px-4 py-2 text-[#5E6282]">Press</a>
                    <a href="#affilates" className="px-4 py-2 text-[#5E6282]">Affilates</a>
                </nav>
            </div>
            <div className='text-center'>
                <h3 className='text-[#080809] mb-4'>More</h3>
                <nav className='flex flex-col'>
                    <a href="#airlinefees" className="px-4 py-2 text-[#5E6282]">Airlinefees</a>
                    <a href="#airline" className="px-4 py-2 text-[#5E6282]">Airline</a>
                    <a href="#tips" className="px-4 py-2 text-[#5E6282]">Low fare tips</a>
                </nav>
            </div >
            <div className='text-center px-4 flex flex-col gap-2'>
                <div className='flex items-center justify-between px-1'>
                    <img src={Facebook} className='border rounded-full bg-slate-400'></img>
                    <img src={Tweeter} className='border rounded-full bg-slate-400'></img>
                </div>
                <span className='text-[#5E6282] text-xl'>Discover our app</span>
                <div className='flex items-center justify-between gap-4 mt-2'>
                    <img src={Playstore}></img>
                    <img src={Appstore}></img>
                </div>
            </div>
        </footer >
    )
}
