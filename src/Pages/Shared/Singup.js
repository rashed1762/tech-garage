import React, { useContext, useState } from 'react'
import video1 from '../../assests/73208-jurupoles-login.mp4'
import { useForm } from 'react-hook-form';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import { toast } from 'react-hot-toast';

const Singup = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const {createUser,updateUser}=useContext(AuthContext);
    const [signUpError,setSignUpError]=useState('');
    const handleSignUp=data=>{
      console.log(data);
      setSignUpError('')
      createUser(data.email,data.password)
      .then(result=>{
        const user=result.user;
        console.log(user);
        toast.success('Successfully created User!');
        const userInfo={
          displayName:data.name
        }
        updateUser(userInfo)
        .then(()=>{})
        .catch(err =>console.log(err));
        
      })
      .catch(error=>{
        console.log(error)
        setSignUpError(error.message);

      })
  }
  return (
    <div className='grid grid-cols-2 gap-2'>
    <div>
      <video src={video1} loop autoPlay></video>
    </div>

    <div className='login' > 
    <h1 className='ml-6 text-4xl font-bold mt-2 '>Signup</h1>
   
    <form  className='mt-8'  onSubmit={handleSubmit( handleSignUp)}>



    <div className="form-control w-full max-w-xs">
<label className="label">
  <span className="label-text ml-28">Name</span>
 
</label>
<input {...register("name", 
    { required: true })} 
      aria-invalid={errors.name ? "true" : "false"} 
       type="text" placeholder="Type here"
        className="input input-bordered w-full max-w-xs ml-28" />
        {errors.name?.type === 'required' && <p className='text-red-600 ml-28' role="alert">Name is required</p>}

</div>
   

    <div className="form-control w-full max-w-xs">
<label className="label">
  <span className="label-text ml-28">Email</span>
 
</label>
<input {...register("email", 
    { required: true })} 
      aria-invalid={errors.email ? "true" : "false"} 
       type="text" placeholder="Type here"
        className="input input-bordered w-full max-w-xs ml-28" />
        {errors.email?.type === 'required' && <p className='text-red-600 ml-28' role="alert">Email is required</p>}

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
        {errors.password?.type === 'required' && <p className='ml-28' role="alert">Password is required</p>}

</div>

    
<button type="submit" className="btn ml-8 mt-8">Signup</button>
{signUpError && <p className='text-red-600'>{signUpError}</p> }
  </form>

  <p className='mt-4 ml-4'>Already have an account?? <NavLink to='/login' as={Link}> <span className='text-blue-600 font-bold' >Go To Login</span></NavLink> </p>

 


    </div>


  </div>
  )
}

export default Singup;