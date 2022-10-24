import React, { useState } from 'react'
import './Footer.css'

function Footer() {

    // const handleClick = () => {
    //     const list = document.getElementById('list');
    //     list.className.remove("dropdown")
    // }
    const [click,setclick] = useState(false);
    const [second,setsecond] = useState(false);
    const [third,setthird] = useState(false);
    const [four,setfour] = useState(false);
    const [five,setfive] = useState(false);

    const handleClick = () => setclick(!click);
    const handleClicks = () => setsecond(!second);
    const handleClickss = () => setthird(!third);
    const handleClicksss = () => setfour(!four);
    const handleClickssss = () => setfive(!five);
    
  return (
    <>
    <div className='flex'>
        <div >
            <div className='flex-mobile'>
            <div className="list-heading">About us</div>
            <div  onClick={handleClick} className="icon">
               <i class="fa fa-angle-down"></i>
            </div>
            </div>
            <ul id='list' className={click ? 'dropdown active' : 'dropdown'}>
                <li>Our Company</li>
                <li>Our Coffee</li>
                <li>Stories and News</li>
                <li>Starbusks Archive</li>
                <li>Investor Relations</li>
                <li>Customer Service</li>
            </ul>
        </div>

        <div >
            <div className='flex-mobile'>
            <div className="list-heading">Careers</div>
            <div  onClick={handleClicks} className="icon">
               <i class="fa fa-angle-down"></i>
            </div>
            </div>
            <ul id='list' className={second ? 'dropdown active' : 'dropdown'}>
                <li>Culture and Values</li>
                <li>Inclusion,Diversity and Euality</li>
                <li>College Achivement Plan</li>
                <li>Alumni Community</li>
                <li>U.S.Careers</li>
                <li>Internation Careers</li>
            </ul>
        </div>

        <div >
            <div className='flex-mobile'>
            <div className="list-heading">Social Impact</div>
            <div  onClick={handleClickss} className="icon">
               <i class="fa fa-angle-down"></i>
            </div>
            </div>
            <ul id='list' className={third ? 'dropdown active' : 'dropdown'}>
                <li>People</li>
                <li>Planet</li>
                <li>Environment and Social Impact Reporting</li>
            </ul>
        </div>

        <div >
            <div className='flex-mobile'>
            <div className="list-heading">Careers</div>
            <div  onClick={handleClicksss} className="icon">
               <i class="fa fa-angle-down"></i>
            </div>
            </div>
            <ul id='list' className={four ? 'dropdown active' : 'dropdown'}>
                <li>Culture and Values</li>
                <li>Suppliers</li>
                <li>Corporate Gift Card Sales</li>
                <li>Office and Foodservice Coffee</li>
                
            </ul>
        </div>

        <div >
            <div className='flex-mobile'>
            <div className="list-heading">Careers</div>
            <div  onClick={handleClickssss} className="icon">
               <i class="fa fa-angle-down"></i>
            </div>
            </div>
            <ul id='list' className={five ? 'dropdown active' : 'dropdown'}>
                <li>Order on the App</li>
                <li>Order on the Web</li>
                <li>Delivery</li>
                <li>Order and Pickup Options</li>
                <li>Explore and find Coffee for Home</li>
            </ul>
        </div>
    </div>
    <div className='footer'>
        <div className='footer-icon'>
            <i className='fa fa-spotify' />
            <i className='fa fa-facebook-square' />
            <i className='fa fa-pinterest' />
            <i className='fa fa-instagram' />
            <i className='fa fa-youtube-play' />
            <i className='fa fa-twitter-square' />
        </div>
        <div className='footer-comp'>
            <p>Privacy Policy</p>
            <p>Terms of use</p>
            <p>CA supply Chain Act</p>
            <p>Cookie preferences</p>
        </div>
    </div>
      
    </>
  )
}

export default Footer
