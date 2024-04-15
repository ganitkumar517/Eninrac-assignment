import React from 'react'
import Dots from "../../assets/dots.svg"
import DP from '../../assets/background image/DP.png'
import Pagination from '../../assets/Pagination.svg'
export default function Testimonial() {
    return (
        <section className='flex justify-between items-center'>
            <div>
                <p className='text-lg text-[#5E6282]'>Testimonials</p>
                <h1 className='text-[50px] text-[#14183E] w-[511px] font-bold leading-[54px]'>What people say about Us.</h1>
                <img src={Dots} className='mt-[82px]'></img>
            </div>
            <div className='flex items-center gap-16'>
                <div className='flex items-start gap-4'>
                    <img src={DP}></img>
                    <div className='flex flex-col gap-4'>
                        <p className='w-[400px] text-[#5E6282]'>“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”</p>
                        <div>
                            <p className='text-[#5E6282]'>Mike taylor</p>
                            <p className='text-[#5E6282]'>Lahore, Pakistan</p>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={Pagination}></img>
                </div>
            </div>
        </section>
    )
}
