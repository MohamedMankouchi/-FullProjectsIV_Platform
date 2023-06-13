import React from 'react'
import gif from '../images/aliali2.gif'
import '../styling/timetable.css'

const BillboardShowroom = () => {
    const style = {
        width: '100vw',
transform: 'rotate(90deg)',
top: '100vh',


    }

        const btn = {
top:'50px'



    }



  return (
    <div style={style}>
            <a style={btn} href="https://www.smashingmagazine.com/2018/08/flexbox-alignment/">
            <img 
            style={{width:'100vw',}}
            
            src={gif} alt="" />

            </a>

        
      
    </div>
  )
}

export default BillboardShowroom
