import  { useEffect, useState } from 'react'

const Vegtable = () => {

  let [veg,setveg]=useState(null)

  useEffect(()=>{
    fetch("http://localhost:4003/veg")
    .then((res)=>{return res.json()})
    .then((data)=>{setveg(data);console.log(data.Vname)})
  },[])

  return (
    <div>
          { veg && <div className='vegtable'>
                {veg.map((v)=>{
                  <div className="veg_list">
                     <div className="veg_img">
                          <img src={v.img} alt="img not avialble" />
                     </div>
                     <div className="veg_dtls">
                          <h1>{v.Vname}</h1>
                          <h3><b>{v.price}</b></h3>
                          <h2>{v.Units}</h2>
                     </div>
                  </div>
                             } 
                        )
                }
            </div>}
            <h1>hello its a vegetable componennt</h1>
   </div>
  )
}
export default Vegtable
