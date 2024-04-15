import React from 'react'
import Axon from '../../assets/logos/axon.png'
import Jetstar from '../../assets/logos/jetstar.png'
import expedia from '../../assets/logos/expedia.png'
import Litalia from '../../assets/logos/litalia.png'
import Qantas from '../../assets/logos/qantas.png'


export default function Logos() {
    return (
        <div className='flex justify-between items-center'>
            <img src={Axon}></img>
            <img src={Jetstar}></img>
            <img src={expedia}></img>
            <img src={Qantas}></img>
            <img src={Litalia}></img>
        </div>
    )
}
