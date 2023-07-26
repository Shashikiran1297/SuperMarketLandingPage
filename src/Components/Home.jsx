import React, { useEffect, useState } from 'react'


const Home = () => {
    let [slide,setslide]=useState(null)
   

    useEffect(()=>{
        fetch("  http://localhost:4001/slide")
        .then((res)=>{return res.json()})
        .then((data)=>{setslide(data)})
    },[])
  return (
    <div className='content1'>
      <marquee behavior="" direction="">
       { slide &&  <img src={slide.slide} alt="" />}
      </marquee>
    </div>
  )
}
export default Home
