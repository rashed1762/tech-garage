import React from 'react'
import Slider from "react-slick";
import img3 from '../../assests/brand-1.png'
import img4 from '../../assests/brand-2.png'
import img5 from '../../assests/brand-3.png'
import img6 from '../../assests/brand-4.png'
import img7 from '../../assests/brand-5.png'
import img8 from '../../assests/brand-6.png'
import img9 from '../../assests/brand-7.png'
import img10 from '../../assests/brand-8.png'
import img11 from '../../assests/brand-9.png'
import img12 from '../../assests/brand-10.png'
import img13 from '../../assests/brand-11.png'
import img14 from '../../assests/brand-12.png'
import img15 from '../../assests/saller-1.png'
import img16 from '../../assests/saller-2.png'
import img17 from '../../assests/saller-3.png'
import img18 from '../../assests/saller-4.png'
import img19 from '../../assests/saller-5.png'
import img20 from '../../assests/saller-6.png'

import ads1 from '../../assests/ads-1.png'
import ads2 from '../../assests/ads-2.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faLock, faRotateBackward, faTrophy, faTruckFast } from '@fortawesome/free-solid-svg-icons'
import img1 from '../../assests/Samsung-Galaxy-S23-Ultra-review-5.webp'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Home.css'
import Proudctdisplay from './Proudctdisplay';
import Topseling from './Topseling';
import Footer from '../Shared/Footer';

const Homecomp = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    cssEase: "linear",
    autoplaySpeed: 3000,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div>

    <div className='grid grid-cols-3 gap-4 ml-8'>
      <div className='col-span-2'>
      <Slider {...settings}>
          <div>
            <img className='img1' src={img1} alt="" />
          </div>
          <div>
          <img className='img1' src="https://media-cldnry.s-nbcnews.com/image/upload/newscms/2021_03/3423237/201026-playstation5-xbox-2x1-tease-v2-ac-1120p.jpg" alt="" />
          </div>
          <div>
          <img className='img1' src="https://www.flatpanelshd.com/pictures/androidtvads_small.jpg" alt="" />
          </div>
          <div>
          <img className='img1' src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81c78kwBs4L.jpg" alt="" />
          </div>
          <div>
          <img className='img1' src="https://wallpaperaccess.com/full/4221603.jpg" alt="" />
          </div>
          <div>
          <img className='img1' src="https://cdn.thewirecutter.com/wp-content/media/2022/11/gaming-mouse-2048px-6876-2x1-1.jpg?auto=webp&quality=75&crop=2:1&width=1024" alt="" />
          </div>
          <div>
          

          <img className='img1' src="https://assets2.rockpapershotgun.com/Roccat-Vulcan-II-Max.JPG/BROK/resize/1920x1920%3E/format/jpg/quality/80/Roccat-Vulcan-II-Max.JPG" alt="" />
          </div>
         
        </Slider>
      </div>

      <div className='mr-8'>
      <img src="https://play-lh.googleusercontent.com/EwbHCX9XX-4nHUqvHk_dkIaqtIJ8YcHgnSumNR95Voe_vz1B9MPa1rZnNKEEp1SsdBOW=w526-h296-rw" alt="" />
      <div>
        <br />
      <img src="https://c4.wallpaperflare.com/wallpaper/400/938/541/xbox-one-future-of-gaming-wallpaper-preview.jpg" alt="" />
      </div>
      </div>

    </div>


<div className='grid grid-cols-4 gap-4 ml-8 mt-16'>  

<div >

<FontAwesomeIcon className='caticon' icon={faTruckFast} />
<h1 className='text-xl font-bold'>Free Shipping</h1>
<p>When ordering over $100

</p>


</div>


<div >

<FontAwesomeIcon className='caticon' icon={faRotateBackward} />
<h1 className='text-xl font-bold'>Free Return</h1>
<p>Get Return within 30 days

</p>


</div>

<div >

<FontAwesomeIcon className='caticon' icon={faTrophy} />
<h1 className='text-xl font-bold'>Secure Payment</h1>
<p>100% Secure Online Payment

</p>


</div>

<div >

<FontAwesomeIcon className='caticon' icon={faTruckFast} />
<h1 className='text-xl font-bold'>Best Quality</h1>
<p>Original Product Guarenteed

</p>


</div>
</div>

<Proudctdisplay></Proudctdisplay>

<section>
<h1 className='text-start ml-8 mt-24 text-5xl font-bold'>Shop By Brand</h1>
<div className='grid grid-cols-6 gap-4 ml-8 mt-16'>
  <div><img src={img3} alt="" /></div>
  <div><img src={img4} alt="" /></div>
  <div><img src={img5} alt="" /></div>
  <div><img src={img6} alt="" /></div>
  <div><img src={img7} alt="" /></div>
  <div><img src={img8} alt="" /></div>
  
</div>
<div className='grid grid-cols-6 gap-4 ml-8 mt-16'>
    
  <div><img src={img9} alt="" /></div>
  <div><img src={img10} alt="" /></div>
  <div><img src={img11} alt="" /></div>
  <div><img src={img12} alt="" /></div>
  <div><img src={img13} alt="" /></div>
  <div><img src={img14} alt="" /></div>
  </div>
</section>

<Topseling></Topseling>

<section>
<h1 className='text-start ml-8 mt-24 text-5xl font-bold'>Best Saller</h1>
<div className='grid grid-cols-6 gap-4 ml-16 mt-16'>
  <div><img src={img15} alt="" />
  <h1 className='mr-28 mt-4 text-1xl font-bold'>Shopno BD</h1></div>
  <div><img src={img16} alt="" />
  <h1 className='mr-28 mt-6 text-1xl font-bold'>Eecoms Shop</h1>
  </div>
  <div><img src={img17} alt="" />
  <h1 className='mr-28 mt-4 text-1xl font-bold'>Fusion X</h1>
  </div>
  <div><img src={img18} alt="" />
  <h1 className='mr-28 mt-4 text-1xl font-bold'>Rikayi Rox</h1>
  </div>
  <div><img src={img19} alt="" />
  <h1 className='mr-28 mt-4 text-1xl font-bold'>Habbriyi</h1>
  </div>
  <div><img src={img20} alt="" />
  <h1 className='mr-28 mt-4 text-1xl font-bold'>Rayhans</h1>
  </div>
  
</div>
</section>

<div className='grid grid-cols-2 gap-4 ml-16 mt-16'>
  <img src={ads1} alt="" />
  <img src={ads2} alt="" />
</div>

<section className='mt-16'>
<Footer></Footer>
</section>




        
      </div>
  )
}

export default Homecomp;