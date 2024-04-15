import React from 'react'
import Weather from '../../assets/calculated.svg'
import Flights from '../../assets/flights.svg'
import Events from '../../assets/events.png'
import Custom from '../../assets/custom.svg'
import Rectangle from '../../assets/rectangle.svg'
import Cross from '../../assets/cross.svg'


export default function Service() {
    const services = [
        {
            "image": Weather,
            "title": "Calculated Weather",
            "description": "Built Wicket longer admire do barton vanity itself do in it."
        },
        {
            "image": Flights,
            "title": "Best Flights",
            "description": "Engrossed listening. Park gate sell they west hard for the."
        },
        {
            "image": Events,
            "title": "Local Events",
            "description": "Barton vanity itself do in it. Preferd to men it engrossed listening."
        },
        {
            "image": Custom,
            "title": "Customization",
            "description": "We deliver outsourced aviation services for military customers"
        }
    ]

    return (
        <section>
            <img src={Cross} className='absolute right-12'></img>
            <div className='text-center mb-[67px]'>
                <p className='uppercase text-[#5E6282] text-lg'>Category</p>
                <h1 className='text-[50px] font-bold text-[#14183E]'>We Offer Best</h1>
            </div>
            <div className='flex justify-between items-center '>
                {services.map((ele, ind) => (
                    <div className={`w-48 text-center h-auto flex justify-center flex-col gap-4 relative bg-white  ${ind == 1 ? "rounded-[36px]" : ""} `}>
                        <div className='flex justify-center'>
                            <img src={ele.image} ></img>
                        </div>
                        <h2 className='text-[#1E1D4C] text-xl'>{ele.title}</h2>
                        <p className='text-[#5E6282] font-medium'>{ele.description}</p>
                        {ind == 1 && (
                            <img src={Rectangle} className='absolute top-40 -left-10 -z-50 mix-blend-soft-light'></img>
                        )

                        }
                    </div>
                ))
                }
            </div>
        </section>
    )
}
