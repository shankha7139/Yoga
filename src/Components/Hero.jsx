import React from 'react'
import Carousel from 'react-material-ui-carousel'
import hero1 from "../assets/hero1.png"
import hero2 from "../assets/hero2.png"


export default function Hero() {
  return (
    <>
    <Carousel className='' > 
        <img src={hero1} alt="" />
        <img src={hero2} alt="" />
    </Carousel>
    </>
  )
}
