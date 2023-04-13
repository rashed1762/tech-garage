import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faLock, faRotateBackward, faStar, faTrophy, faTruckFast } from '@fortawesome/free-solid-svg-icons'
import './shop.css'
import { Link, NavLink } from 'react-router-dom'
import Slider from 'react-slick'

const Shop = () => {
  
  return (
    
   <div className='mt-16'>
    <div className='grid grid-cols-4 gap-4 ml-8'>

      <div className='col-span-3 navpart '>
      <div className='grid grid-cols-3 gap-4'>
      <div className="card w-72 bg-base-100 shadow-xl">
  <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>

<div className="card w-72 bg-base-100 shadow-xl">
  <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>

<div className="card w-72 bg-base-100 shadow-xl">
  <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>

<div className="card w-72 bg-base-100 shadow-xl">
  <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>


<div className="card w-72 bg-base-100 shadow-xl">
  <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>


<div className="card w-72 bg-base-100 shadow-xl">
  <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>


<div className="card w-72 bg-base-100 shadow-xl">
  <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>


<div className="card w-72 bg-base-100 shadow-xl">
  <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
      </div>
      </div>

      <div >
        <h1 className='text-xl font-bold border-b-4 border-indigo-500 '>Product category</h1>
        <div className='info mt-8'>
        <div tabIndex={0} className=" collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
  <div className="collapse-title text-xl font-medium btn-primary">
    Mobile
  </div>
  <div className="collapse-content"> 
  <button className="btn btn-wide mt-4 btn-primary">oppo</button>
  <button className="btn btn-wide mt-4 btn-primary">xiomi</button>
  <button className="btn btn-wide mt-4 btn-primary">samsung</button>
  </div>
</div>
<button className="btn btn-wide mt-4 ">Mobile</button>
      <button className="btn btn-wide mt-4">Laptop</button>
      <button className="btn btn-wide mt-4">Desktop</button>
      <button className="btn btn-wide mt-4">Monitor</button>
      <button className="btn btn-wide mt-4">Mouse</button>
      <button className="btn btn-wide mt-4">Keybord</button>
      <button className="btn btn-wide mt-4">Headphoen</button>
      <button className="btn btn-wide mt-4">X-BOX</button>
      <button className="btn btn-wide mt-4">Camera</button>
      <button className="btn btn-wide mt-4">Fyurniture</button>
        </div>
     
      </div>

    </div>
   </div>
  )
}

export default Shop;