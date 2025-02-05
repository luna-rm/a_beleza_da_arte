import React from 'react'
import './Rs.css'
import img3 from '../../imgs/img3.png'
import img4 from '../../imgs/img4.png'
import sound1 from '../../imgs/sound1.wav'

function R2() {
    var tocar = () => {
        new Audio(sound1).play()
    }

    return (
        <div className='contentR'>
            <div onClick={tocar} className='tocarR'>tocar senha</div>
            <img src={img4} alt='img4' className='imgR1'/>
            <img src={img3} alt='img3' className='imgR2'/>
        </div>
    )
}

export default R2
