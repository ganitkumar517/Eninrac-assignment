import React from 'react'
import Europe from "../../assets/background image/europe.png"
import London from "../../assets/background image/london.png"
import Rome from "../../assets/background image/rome.png"
import Navigation from "../../assets/navigation.svg"


export default function Destination() {

    const destination = [
        {
            "image": Rome,
            "country": "France",
            "price": "15k",
            "days": 7
        },
        {
            "image": London,
            "country": "Japan",
            "price": "15k",
            "days": 14
        },
        {
            "image": Europe,
            "country": "Italy",
            "price": "15k",
            "days": 10
        },
    ]
    return (
        <div>
            <div className='text-center mb-[67px]'>
                <p className='uppercase text-[#5E6282] text-lg'>Category</p>
                <h1 className='text-[50px] font-bold text-[#14183E]'>We Offer Best</h1>
            </div>
            <div className='flex justify-between items-center'>
                {
                    destination.map((ele) => (
                        <div className='rounded-3xl relative border'>
                            <img src={ele.image}></img>
                            <div className='px-6 absolute bottom-0 left-0 right-0 bg-white rounded-b-3xl h-[130px] pt-6'>
                                <div className='flex justify-between'>
                                    <h3 className='text-[#5E6282]'>{ele.country}</h3>
                                    <h3 className='text-[#5E6282]'>${ele.price}</h3>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <img src={Navigation}></img>
                                    <p className='text-[#5E6282]'>{ele.days} Days Trip</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
