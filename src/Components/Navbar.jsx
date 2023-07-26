import React from 'react'
import '../Styles/Navbar.css'
import {useState} from 'react' 
import {Link} from 'react-router-dom'
const Navbar = () => {
    let [abt,setabt]=useState(false); 
    let [format,setformat]=useState(false);
    let [ctgr,setctgr]=useState(false);
    let [job,setjob]=useState(false);
    let [fresh,setfresh]=useState(false);
  return (
    <nav>
      <div className='logo1'>
          <img src="https://content.jdmagicbox.com/comp/bangalore/r3/080pxx80.xx80.190719230004.w8r3/catalogue/more-supermarket-bangalore-pickle-retailers-0aesmj0ukw.jpg" alt="" />
     </div>
     <div className='select1'>
               <div onClick={()=>{setabt(!abt)}}> 
                   <span href="">About</span>
                 { abt && <div id='dd1'> 
                    <li>Company History</li>
                    <li>Mission Statement</li>
                    <li>Leadership</li>
                    <li>Mrpl values</li>
                    <li>Ethics and policy</li>
                    <li>Quality</li>
                   </div>}
               </div> 
               <div onClick={()=>{setformat(!format)}}>
                  <span href="">Our Formats</span>
                  { format &&  <div id='dd2'>
                     <li>Hypermart</li>
                    <li>Supermart</li>
                   </div>}
               </div>
               <div onClick={()=>{setctgr(!ctgr)}}>
                  <span href="">Categories</span>
                  { ctgr &&  <div id='dd3'>
                    <li>Grocery Food</li>
                    <div onClick={()=>{setfresh(!fresh)}} > 
                     <li>Grocery Fresh</li>
                     { fresh && <div className='FruitsAndVeg'>
                     <li>Fruits</li>
                     <Link to="/veg"><li>Vegetables</li></Link>
                     </div> }
                   </div>
                    <li>Grocery Non-Food</li>
                    <li>Grocery Lifestyle</li>
                    <li>Our brands</li>
                   </div>}
               </div>
               <div onClick={()=>{setjob(!job)}}> 
                  <span href="">Careers</span>
                  { job &&  <div id='dd4'>
                    <li>Life @ More</li>
                    <li>Employee Speak</li>
                    <li>Current openings</li>
                   </div>}
               </div>
                 <span href="">GetInTouch</span>
                 <span href=""> <i class='bx bx-location-plus' ></i> find a  more store</span>
     </div>
    </nav>
  )
}

export default Navbar
