import React from 'react'
import Share from '../../assets/share.svg'
import Cross from '../../assets/cross2.svg'
export default function Subscribe() {
    return (
        <section className='relative'>
            <img src={Share} className='absolute -right-6 -top-6'></img>
            <div className='bg-[#DFD7F9] h-[407px] flex justify-center flex-col text-center items-center gap-10 p-10 rounded-tl-[150px] rounded-xl'>
                <h2 className='text-[#5E6282] text-[33px] w-[869px]'>Subscribe to get information, latest news and other interesting offers about Cobham</h2>
                <div className='flex gap-4'>
                    <input placeholder='Your email' type='email' className='w-[421px] rounded-[10px] p-4'></input>
                    <button className='bg-custom-gradient w-[180px] h-[68px] rounded-[10px]'>Subscribe</button>
                </div>
            </div>
            <img src={Cross} className='absolute -right-24 -bottom-20'></img>
        </section>
    )
}
