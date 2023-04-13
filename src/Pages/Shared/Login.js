import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form';
import video1 from '../../assests/73208-jurupoles-login.mp4'
import  './login.css'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const Login = () => {

  const { register, formState: { errors }, handleSubmit } = useForm();
  const {SignIn}=useContext(AuthContext);
  const [loginErroe,setLoginError]=useState('');
  const location=useLocation();
  const navigate=useNavigate();
  const from=location.state?.from?.pathname || '/';

const handleLogin=data=>{
  console.log(data);
  setLoginError('');
  SignIn(data.email,data.password)
  .then(result=>{
    const user=result.user;
    console.log(user);
    navigate(from,{replace:true});
  })
  .catch(error=>{
    console.log(error.message)
  setLoginError(error.message);
  });
}


  return (
    <div className='grid grid-cols-2 gap-2'>
      <div>
        <video src={video1} loop autoPlay></video>
      </div>

      <div className='login' > 
      <h1 className='ml-6 text-4xl font-bold mt-2'>Login</h1>
     
      <form  className='mt-8'  onSubmit={handleSubmit(handleLogin)}>
     

      <div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text ml-28">Email</span>
   
  </label>
  <input {...register("email", 
      { required: true })} 
        aria-invalid={errors.email ? "true" : "false"} 
         type="text" placeholder="Type here"
          className="input input-bordered w-full max-w-xs ml-28" />
          {errors.email && <p className='text-rose-600 ml-32' role="alert">{errors.email?.message}</p>}
  
</div>




<div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text ml-28">Password</span>
   
  </label>
  <input {...register("password", 
      { required: true })} 
        aria-invalid={errors.password ? "true" : "false"} 
         type="text" placeholder="Type here"
         className="input input-bordered w-full max-w-xs ml-28" />
          {errors.password && <p className='text-rose-600 ml-28' role="alert">{errors.password?.message}</p>}
  
</div>

      
<button type="submit" className="btn ml-8 mt-8">Login</button>
<div>
        {loginErroe && <p className='text-red-600'>{loginErroe}</p> }
      </div>
      
    </form>

    <p className='mt-4 ml-4'>Don't have any account? <NavLink to='/singup' as={Link}> <span className='text-blue-600 font-bold' >Create Account</span></NavLink> </p>

   


      </div>


    </div>
  )
}

export default Login;