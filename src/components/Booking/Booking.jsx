import React from 'react'
import Date from "../../assets/date.svg"
import Payment from "../../assets/payment.svg"
import Choose from "../../assets/choose.svg"
import Trip from "../../assets/background image/trip.png"
import Map from "../../assets/map.svg"
import Leaf from "../../assets/LEAF.svg"
import Send from "../../assets/send.svg"
import Building from "../../assets/building.svg"
import Heart from "../../assets/heart.svg"

export default function Booking() {
    const steps = [
        {
            "image": Choose,
            "title": "Choose Destination",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus."
        },
        {
            "image": Payment,
            "title": "Make Payment",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus."
        },
        {
            "image": Date,
            "title": "Reach Airport on Selected Date",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus."
        },
    ]
    return (
        <div className='flex items-center justify-between'>
            <div className='flex flex-col gap-6'>
                <p className='text-lg text-[#5E6282]'>Easy and Fast</p>
                <h1 className='text-[50px] text-[#14183E] w-[511px] font-bold leading-[54px]'>Book your next trip in 3 easy steps</h1>
                <div>
                    <div className='flex flex-col gap-10'>
                        {steps.map(step => (
                            <div className='flex items-center gap-4'>
                                <img src={step.image}></img>
                                <div>
                                    <h3 className='text-[#5E6282] text-base'>{step.title}</h3>
                                    <p className='text-[#5E6282]'>{step.description}</p>
                                </div>
                            </div>

                        ))
                        }
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-4 border p-2 pb-6 rounded-3xl'>
                <img src={Trip}></img>
                <div className='flex flex-col gap-4 px-4'>
                    <h3 className='text-lg font-medium'>Trip To Greece</h3>
                    <div className='flex justify-between text-[#84829A] font-medium'>
                        <p>14-29</p>
                        <p>byRobbin</p>
                    </div>
                    <div className='flex justify-between'>
                        <img src={Leaf}></img>
                        <img src={Map}></img>
                        <img src={Send}></img>
                    </div>
                    <div className='flex justify-between'>
                        <div className='flex gap-2'>
                            <img src={Building}></img>
                            <p className='text-[#84829A]'>24 people</p>
                        </div>
                        <img src={Heart}></img>
                    </div>
                </div>
            </div>
        </div>
    )
}
