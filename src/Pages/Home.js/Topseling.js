import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faStar } from '@fortawesome/free-solid-svg-icons'
import img1 from '../../assests/product-img-4.jpg'
import img2 from '../../assests/product-img-5.jpg'
import { Link, NavLink } from 'react-router-dom';

const Topseling = () => {
  return (
    <div>
        <h1 className='text-start ml-8 mt-24 text-5xl font-bold'>Top Selling Product</h1>
        <div className='grid grid-cols-2 gap-4 ml-16 mr-16 mt-16'>

            <div>
            <div className="card topcrdstyle lg:card-side bg-base-100 shadow-xl">
  <figure><img className='topimg' src="https://www.bdstall.com/asset/product-image/giant_211991.jpg" alt="Album"/></figure>
  <div className="card-body text-start">
    <h2 > <FontAwesomeIcon className='topicon'  icon={faStar}/>
        <FontAwesomeIcon className='topicon'  icon={faStar}/>
        <FontAwesomeIcon  className='topicon' icon={faStar}/>
        <FontAwesomeIcon  className='topicon' icon={faStar}/>
        <FontAwesomeIcon  className='topicon' icon={faStar}/></h2>
    <p className='text-2xl font-bold'>Asus VivoBook S14 </p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate amet eveniet nemo obcaecati. Culpa maxime velit dolorem, id dolores alias quidem. Impedit assumenda odit ab eligendi necessitatibus eveniet illo perspiciatis.</p>

    <p className='textcolor'><span className='textstyle'>$170</span> $150</p>
    
    <div className="card-actions justify-end">
        <div></div>
        <NavLink to="/shop" as={Link}> <button className="btn btn-outline btn-success ">Buy Now</button></NavLink> 
    </div>
  </div>
</div>
            </div>

            <div>
            <div className="card topcrdstyle lg:card-side bg-base-100 shadow-xl">
  <figure><img className='topimg' src={img2} alt="Album"/></figure>
  <div className="card-body text-start">
    <h2 > <FontAwesomeIcon className='topicon'  icon={faStar}/>
        <FontAwesomeIcon className='topicon'  icon={faStar}/>
        <FontAwesomeIcon  className='topicon' icon={faStar}/>
        <FontAwesomeIcon  className='topicon' icon={faStar}/>
        <FontAwesomeIcon  className='topicon' icon={faStar}/></h2>
    <p className='text-2xl font-bold'>Oneplus 7pro</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate amet eveniet nemo obcaecati. Culpa maxime velit dolorem, id dolores alias quidem. Impedit assumenda odit ab eligendi necessitatibus eveniet illo perspiciatis.</p>

    <p className='textcolor'><span className='textstyle'>$170</span> $150</p>
    
    <div className="card-actions justify-end">
        <div></div>
        <NavLink to="/shop" as={Link}> <button className="btn btn-outline btn-success ">Buy Now</button></NavLink> 
    </div>
  </div>
</div>
            </div>

        </div>


        <div className='grid grid-cols-2 gap-4 ml-16 mr-16 mt-16'>

            <div>
            <div className="card topcrdstyle lg:card-side bg-base-100 shadow-xl">
  <figure><img className='topimg' src="https://www.startech.com.bd/image/cache/catalog/gaming-console/microsoft/xbox-series-x/xbox-series-x-01-500x500.webp" alt="Album"/></figure>
  <div className="card-body text-start">
    <h2 > <FontAwesomeIcon className='topicon'  icon={faStar}/>
        <FontAwesomeIcon className='topicon'  icon={faStar}/>
        <FontAwesomeIcon  className='topicon' icon={faStar}/>
        <FontAwesomeIcon  className='topicon' icon={faStar}/>
        <FontAwesomeIcon  className='topicon' icon={faStar}/></h2>
    <p className='text-2xl font-bold'>Microsoft Xbox Series X </p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate amet eveniet nemo obcaecati. Culpa maxime velit dolorem, id dolores alias quidem. Impedit assumenda odit ab eligendi necessitatibus eveniet illo perspiciatis.</p>

    <p className='textcolor'><span className='textstyle'>$170</span> $150</p>
    
    <div className="card-actions justify-end">
        <div></div>
        <NavLink to="/shop" as={Link}> <button className="btn btn-outline btn-success ">Buy Now</button></NavLink> 
    </div>
  </div>
</div>
            </div>

            <div>
            <div className="card topcrdstyle lg:card-side bg-base-100 shadow-xl">
  <figure><img className='topimg' src="https://www.startech.com.bd/image/cache/catalog/headphone/havit/hv-h2032d/gamenote-hv-h2032d-01-500x500.png" alt="Album"/></figure>
  <div className="card-body text-start">
    <h2 > <FontAwesomeIcon className='topicon'  icon={faStar}/>
        <FontAwesomeIcon className='topicon'  icon={faStar}/>
        <FontAwesomeIcon  className='topicon' icon={faStar}/>
        <FontAwesomeIcon  className='topicon' icon={faStar}/>
        <FontAwesomeIcon  className='topicon' icon={faStar}/></h2>
    <p className='text-2xl font-bold'>Havit Gamenote HV-H2032D </p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate amet eveniet nemo obcaecati. Culpa maxime velit dolorem, id dolores alias quidem. Impedit assumenda odit ab eligendi necessitatibus eveniet illo perspiciatis.</p>

    <p className='textcolor'><span className='textstyle'>$170</span> $150</p>
    
    <div className="card-actions justify-end">
        <div></div>
        <NavLink to="/shop" as={Link}> <button className="btn btn-outline btn-success ">Buy Now</button></NavLink> 
    </div>
  </div>
</div>
            </div>

        </div>



        <div className='grid grid-cols-2 gap-4 ml-16 mr-16 mt-16'>

            <div>
            <div className="card topcrdstyle lg:card-side bg-base-100 shadow-xl">
  <figure><img className='topimg' src="https://www.bdstall.com/asset/product-image/giant_202168.jpg" alt="Album"/></figure>
  <div className="card-body text-start">
    <h2 > <FontAwesomeIcon className='topicon'  icon={faStar}/>
        <FontAwesomeIcon className='topicon'  icon={faStar}/>
        <FontAwesomeIcon  className='topicon' icon={faStar}/>
        <FontAwesomeIcon  className='topicon' icon={faStar}/>
        <FontAwesomeIcon  className='topicon' icon={faStar}/></h2>
    <p className='text-2xl font-bold'>Lenovo V14 Core i3</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate amet eveniet nemo obcaecati. Culpa maxime velit dolorem, id dolores alias quidem. Impedit assumenda odit ab eligendi necessitatibus eveniet illo perspiciatis.</p>

    <p className='textcolor'><span className='textstyle'>$170</span> $150</p>
    
    <div className="card-actions justify-end">
        <div></div>
        <NavLink to="/shop" as={Link}> <button className="btn btn-outline btn-success ">Buy Now</button></NavLink> 
    </div>
  </div>
</div>
            </div>

            <div>
            <div className="card topcrdstyle lg:card-side bg-base-100 shadow-xl">
  <figure><img className='topimg' src="https://www.startech.com.bd/image/cache/catalog/camera/dslr-camera/canon/1500d/1500d-7-500x500.jpg" alt="Album"/></figure>
  <div className="card-body text-start">
    <h2 > <FontAwesomeIcon className='topicon'  icon={faStar}/>
        <FontAwesomeIcon className='topicon'  icon={faStar}/>
        <FontAwesomeIcon  className='topicon' icon={faStar}/>
        <FontAwesomeIcon  className='topicon' icon={faStar}/>
        <FontAwesomeIcon  className='topicon' icon={faStar}/></h2>
    <p className='text-2xl font-bold'>Canon EOS 1500D 24.1MP</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate amet eveniet nemo obcaecati. Culpa maxime velit dolorem, id dolores alias quidem. Impedit assumenda odit ab eligendi necessitatibus eveniet illo perspiciatis.</p>

    <p className='textcolor'><span className='textstyle'>$170</span> $150</p>
    
    <div className="card-actions justify-end">
        <div></div>
        <NavLink to="/shop" as={Link}> <button className="btn btn-outline btn-success ">Buy Now</button></NavLink> 
    </div>
  </div>
</div>
            </div>

        </div>

        
    </div>
  )
}

export default Topseling;