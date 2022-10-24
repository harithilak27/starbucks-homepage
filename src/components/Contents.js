import React from 'react'
import './Contents.css'
import img from './images/img.jpg'
import img2 from './images/img2.jpg'
import img3 from './images/img3.jpg'
import img4 from './images/img4.jpg'

function Contents() {
  return (
    <>
      <div className='flex-box section-1'>
        <div className='image'>
          <img src={img} alt=""/>
        </div>
        <div className='content'>
        <h1>Win a thousand Stars</h1>
        <p>We’re giving away 1,000 Stars to 1,000 Starbucks Rewards members in our Million Stars Giveaway and much more all week!*</p>
        <button className='btn'>Play to win</button>
        </div>
      </div>
     
      <div className='flex-box'>
        <div className='content section-2'>
        <h1>A new way to earn sips and trips</h1>
        <p>Now you can link your Starbucks® Rewards + Delta SkyMiles® accounts to get:</p>
        <ul>
          <li>150 Stars + 500 miles when you link before 12/31</li>
          <li>Double Stars on Delta travel days</li>
          <li>1 mile per $1 spent at Starbucks (excludes taxes and gratuities)**</li>
        </ul>
        <button className='btn'>Link accounts</button>
        </div>
        <div className='image image-2'>
          <img src={img2} alt=""/>
        </div>
        </div>
        
        <div className='flex-box section-3'>
        <div className='image'>
          <img src={img3} alt=""/>
        </div>
        <div className='content'>
        <h1>Perfectly<br /> Pumpkin</h1>
        <p>Savor the season with a Pumpkin Spice Latte or Pumpkin Cream Cold Brew</p>
        <button className='btn btn-2'>Order now</button>
        </div>
      </div>

      <div className='flex-box section-3'>
        <div className='content'>
        <h1>Layers of baked apple yum</h1>
        <p>Try the Apple Crisp Oatmilk Macchiato, now nondairy and with Starbucks Blonde Espresso.</p>
        <button className='btn btn-2'>Learn more</button>
        </div>
        <div className='image'>
          <img src={img4} alt=""/>
        </div>
      </div>
      <div className='content-bottom'>
        <p>*NO PURCHASE NECESSARY. Participating stores only. Ends 10/23/22. To enter and for Official Rules, visit <a>starbucksstardays.com</a>.</p>
        <p>**Excludes taxes and gratuities. At participating stores. Some restrictions apply. 150 Stars deposited after first qualifying Starbucks purchase. Flights purchased close to departure may not earn double Stars. Stars may not be earned on purchases of alcohol, Starbucks Cards and Starbucks Card reloads. For details, visit deltastarbucks.com/terms</p>
      </div>

    </>  

      
  )
}

export default Contents