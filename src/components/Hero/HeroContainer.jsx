import React from 'react'
import Play_Button from "../../assets/play.svg"
import Hero_image from "../../assets/hero-image.png"

export default function HeroContainer() {
    return (
        <section className='flex items-center justify-between'>
            <div className='flex flex-col gap-8'>
                <p className='text-xl text-[#DF6951] font-bold'>Best Destination around the world</p>
                <div className='text-[80px] w-[545px] text-[#181E4B] font-bold leading-[89px]'>Travel, enjoy and live a new and full life</div>
                <p className='w-[477px] text-[#5E6282]'>Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.</p>
                <div className='flex w-[372px] justify-between'>
                    <button className='bg-[#F1A501] rounded-[10px] drop-shadow-custom h-[60px] w-[170px]'>Find out more</button>
                    <div className='flex items-center gap-2'>
                        <img src={Play_Button}></img>
                        <p>Play more</p>
                    </div>
                </div>
            </div>
            <div>
                <img src={Hero_image}></img>
            </div>
        </section>
    )
}
