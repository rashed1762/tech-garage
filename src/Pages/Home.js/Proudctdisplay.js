import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faLock, faRotateBackward, faStar, faTrophy, faTruckFast } from '@fortawesome/free-solid-svg-icons'
import img2 from '../../assests/section-category-1.jpg'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Home.css'

const Proudctdisplay = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: true,
        cssEase: "linear",
        autoplaySpeed: 3000,
      };
  return (
    <div>
        <div className='grid grid-cols-3 gap-4 ml-8 mr-16 mt-16'>
            <div>
                <img className='img2' src={img2} alt="" />

                <div className='info text-start ml-2'>
                    <h1 className='text-xl font-bold mt-8 mb-4'>Mobile and Tablat</h1>
                   <NavLink to="/shop" as={Link}><p className='mb-1'>Xioami</p></NavLink> 
                   <NavLink to="/shop" as={Link}>  <p  className='mb-1'>Apple</p></NavLink> 
                   <NavLink to="/shop" as={Link}><p  className='mb-1'>Google</p></NavLink> 
                   <NavLink to="/shop" as={Link}> <p  className='mb-1'> Samsung</p></NavLink> 
                   <NavLink to="/shop" as={Link}><p  className='mb-1'>Oppo</p></NavLink> 
                   <NavLink to="/shop" as={Link}><p  className='mb-1 font-bold mt-4 '><span className=' border-b-4 border-indigo-500'>Shop Now >> </span> </p></NavLink> 
                  
                  
                    
                </div>
            </div>
            <div className='col-span-2'>
            <Slider {...settings}>
          <div>
          <div className="card w-96 bg-base-100 shadow-xl crdstyle">
  <figure><img className='crdimg' src="https://adminapi.applegadgetsbd.com/storage/media/large/iPhone-14-Pro-Max-Space-Black-6723.jpg" alt="Shoes" /></figure>
  <div className="card-body text-start">
    <h2 className="card-title">
      Iphone 14 PRO MAX
      <div className="badge badge-secondary">
        <FontAwesomeIcon  icon={faStar}/>
        <FontAwesomeIcon  icon={faStar}/>
        <FontAwesomeIcon  icon={faStar}/>
          </div>
    </h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut sequi quasi molestiae facere labore placeat, facilis tempora non ducimus omnis!</p>
    <div className="card-actions justify-end mt-2">
    <NavLink to="/shop" as={Link}> <button className="btn btn-outline btn-success ">Buy Now</button></NavLink> 
   
    </div>
  </div>
</div>
          </div>
          <div>
          <div className="card w-96 bg-base-100 shadow-xl crdstyle">
  <figure><img className='crdimg' src="https://www.skyland.com.bd/wp-content/uploads/2020/10/marvo-hg8928-gaming-headphone.jpg" alt="Shoes" /></figure>
  <div className="card-body text-start">
    <h2 className="card-title">
    Marvo HG8928 Backlight Gaming Headphone
      <div className="badge badge-secondary">
        <FontAwesomeIcon  icon={faStar}/>
        <FontAwesomeIcon  icon={faStar}/>
        <FontAwesomeIcon  icon={faStar}/>
          </div>
    </h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut sequi quasi molestiae facere labore placeat, facilis tempora non ducimus omnis!</p>
    <div className="card-actions justify-end mt-2">
    <NavLink to="/shop" as={Link}> <button className="btn btn-outline btn-success ">Buy Now</button></NavLink> 
   
    </div>
  </div>
</div>
          </div>
          <div>
          <div className="card w-96 bg-base-100 shadow-xl crdstyle">
  <figure><img className='crdimg' src="http://aladinshopper.com/wp-content/uploads/2019/08/Asus-15-X509FA-BR118T-8th-Gen-Intel-Core-i5-8265U.jpg" alt="Shoes" /></figure>
  <div className="card-body text-start">
    <h2 className="card-title">
    Asus X543UA Core i3 7th Gen Laptop 15.6″ HD Laptop
      <div className="badge badge-secondary">
        <FontAwesomeIcon  icon={faStar}/>
        <FontAwesomeIcon  icon={faStar}/>
        <FontAwesomeIcon  icon={faStar}/>
          </div>
    </h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut sequi quasi molestiae facere labore placeat, facilis tempora non ducimus omnis!</p>
    <div className="card-actions justify-end mt-2">
    <NavLink to="/shop" as={Link}> <button className="btn btn-outline btn-success ">Buy Now</button></NavLink> 
   
    </div>
  </div>
</div>
          </div>
          <div>
          <div className="card w-96 bg-base-100 shadow-xl crdstyle">
  <figure><img className='crdimg' src="https://img.joomcdn.net/3fae8ad2a7fc6c5977f4f44265b2d52fe522a938_original.jpeg" alt="Shoes" /></figure>
  <div className="card-body text-start">
    <h2 className="card-title">
      GEN GAME S6 GAMEPAD
      <div className="badge badge-secondary">
        <FontAwesomeIcon  icon={faStar}/>
        <FontAwesomeIcon  icon={faStar}/>
        <FontAwesomeIcon  icon={faStar}/>
          </div>
    </h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut sequi quasi molestiae facere labore placeat, facilis tempora non ducimus omnis!</p>
    <div className="card-actions justify-end mt-2">
    <NavLink to="/shop" as={Link}> <button className="btn btn-outline btn-success ">Buy Now</button></NavLink> 
   
    </div>
  </div>
</div>
          </div>
          <div>
          <div className="card w-96 bg-base-100 shadow-xl crdstyle">
  <figure><img className='crdimg' src="https://www.startech.com.bd/image/cache/catalog/mouse/logitech/g402/logitech-g402-1-500x500.jpg" alt="Shoes" /></figure>
  <div className="card-body text-start">
    <h2 className="card-title">
      Logitech G403
      <div className="badge badge-secondary">
        <FontAwesomeIcon  icon={faStar}/>
        <FontAwesomeIcon  icon={faStar}/>
        <FontAwesomeIcon  icon={faStar}/>
          </div>
    </h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut sequi quasi molestiae facere labore placeat, facilis tempora non ducimus omnis!</p>
    <div className="card-actions justify-end mt-2">
    <NavLink to="/shop" as={Link}> <button className="btn btn-outline btn-success ">Buy Now</button></NavLink> 
   
    </div>
  </div>
</div>
          </div>
          <div>
          <div className="card w-96 bg-base-100 shadow-xl crdstyle">
  <figure><img className='crdimg' src="https://cdn.shopify.com/s/files/1/1706/9177/products/Airpods-3rd-generation-Custom-Mac-BD.jpg?v=1637838494" alt="Shoes" /></figure>
  <div className="card-body text-start">
    <h2 className="card-title">
      Apple Airpod 
      <div className="badge badge-secondary">
        <FontAwesomeIcon  icon={faStar}/>
        <FontAwesomeIcon  icon={faStar}/>
        <FontAwesomeIcon  icon={faStar}/>
          </div>
    </h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut sequi quasi molestiae facere labore placeat, facilis tempora non ducimus omnis!</p>
    <div className="card-actions justify-end mt-2">
    <NavLink to="/shop" as={Link}> <button className="btn btn-outline btn-success ">Buy Now</button></NavLink> 
   
    </div>
  </div>
</div>
          </div>
          <div>
          <div className="card w-96 bg-base-100 shadow-xl crdstyle">
  <figure><img className='crdimg' src="https://fujaelelectronics.com/wp-content/uploads/2022/04/1300.2.jpg" alt="Shoes" /></figure>
  <div className="card-body text-start">
    <h2 className="card-title">
      Canon Eos 1300D
      <div className="badge badge-secondary">
        <FontAwesomeIcon  icon={faStar}/>
        <FontAwesomeIcon  icon={faStar}/>
        <FontAwesomeIcon  icon={faStar}/>
          </div>
    </h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut sequi quasi molestiae facere labore placeat, facilis tempora non ducimus omnis!</p>
    <div className="card-actions justify-end mt-2">
    <NavLink to="/shop" as={Link}> <button className="btn btn-outline btn-success ">Buy Now</button></NavLink> 
   
    </div>
  </div>
</div>
          </div>
          <div>
          <div className="card w-96 bg-base-100 shadow-xl crdstyle">
  <figure><img className='crdimg' src="https://diamu.com.bd/wp-content/uploads/2021/02/K68-RGB-Mechanical-Gaming-Keyboard-1.jpg" alt="Shoes" /></figure>
  <div className="card-body text-start">
    <h2 className="card-title">
      K68 RGB Gaming Keybord
      <div className="badge badge-secondary">
        <FontAwesomeIcon  icon={faStar}/>
        <FontAwesomeIcon  icon={faStar}/>
        <FontAwesomeIcon  icon={faStar}/>
          </div>
    </h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut sequi quasi molestiae facere labore placeat, facilis tempora non ducimus omnis!</p>
    <div className="card-actions justify-end mt-2">
    <NavLink to="/shop" as={Link}> <button className="btn btn-outline btn-success ">Buy Now</button></NavLink> 
   
    </div>
  </div>
</div>
          </div>
          <div>
          <div className="card w-96 bg-base-100 shadow-xl crdstyle">
  <figure><img className='crdimg' src="https://diamu.com.bd/wp-content/uploads/2021/04/Microsoft-Xbox-One-S-Gaming-Console-1TB.jpg" alt="Shoes" /></figure>
  <div className="card-body text-start">
    <h2 className="card-title">
      Xbox One S Gaming
      <div className="badge badge-secondary">
        <FontAwesomeIcon  icon={faStar}/>
        <FontAwesomeIcon  icon={faStar}/>
        <FontAwesomeIcon  icon={faStar}/>
          </div>
    </h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut sequi quasi molestiae facere labore placeat, facilis tempora non ducimus omnis!</p>
    <div className="card-actions justify-end mt-2">
    <NavLink to="/shop" as={Link}> <button className="btn btn-outline btn-success ">Buy Now</button></NavLink> 
   
    </div>
  </div>
</div>
          </div>
        </Slider>
            </div>
            
            
        </div>
    </div>
  )
}

export default Proudctdisplay;