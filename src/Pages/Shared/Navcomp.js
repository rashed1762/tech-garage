import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown, faCoffee, faUser } from '@fortawesome/free-solid-svg-icons'
import img1 from '../../assests/logo.png'
import './nav.css'
import { AuthContext } from '../../context/AuthProvider'


const Navcomp = () => {
  const {user,logOut}=useContext(AuthContext)

  const handleLogOut=()=>{
    logOut()
    .then(()=>{})
    .catch(err=>console.log(err));
  }

  return (
    <div>
        <div className="navbar bg-red-300 nav1">
  <div className="navbar-start">
  <div className="dropdown dropdown-hover">
  <label tabIndex={0} className="btn btn-outline btn-secondary m-1">Select Categories ^ </label>
  <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">

  <NavLink to="/shop" as={Link}>
  <li><a>Mobile</a></li>
    </NavLink>
    <NavLink to="/shop" as={Link}>
  <li><a>Laptop</a></li>
    </NavLink>
    
    
  </ul>
</div>
  </div>
  <div className="navbar-center">
    <img className='logo' src={img1} alt="" />
  </div>
  <div className="navbar-end">

  <NavLink to="/cart" as={Link}>
    <FontAwesomeIcon  className='icon' icon={faCartArrowDown} />
    </NavLink>

  {
          user?.uid?
          <button onClick={handleLogOut} className="btn btn-ghost">Log Out</button>
          
          
          :<NavLink to="/login" as={Link}>
          <FontAwesomeIcon className='icon' icon={faUser} />
          </NavLink>
        }
    

   
  
  
  </div>
</div>


{/* nav2.............................................................................................. */}

<div className="navbar bg-base-100 nav2">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Home</a></li>
        <li tabIndex={0}>
          <a className="justify-between">
            Shop
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
          </a>
          <ul className="p-2 bg-red-300">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
   
  </div>
  <div className="navbar-center hidden lg:flex">
  <ul className=" menu-horizontal px-1 ">
  <li className="hover-bordered mr-8 menunav font-bold"><NavLink to="/" as={Link}>Home</NavLink></li>
  <li className="hover-bordered mr-8 menunav font-bold"><NavLink to="/shop" as={Link}>Shop</NavLink></li>
  <li className="hover-bordered mr-8 menunav font-bold"><NavLink to="/contact" as={Link}>Contact</NavLink></li>
  
</ul>
  </div>
  <div className="navbar-end">
    
  </div>
</div>
    </div>
  )
}

export default Navcomp;