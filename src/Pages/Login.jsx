import React, { useState } from 'react'
import AdminLogin from './AdminLogin';
import StaffLogin from './StaffLogin';
import { IoMdArrowRoundForward } from "react-icons/io";
import Header from './Header'
// import  { auth } from '../Auth/Authprovider';

function Login(props) {
  // const profileAuth = useContext(auth)
  // console.log(profileAuth)


  const [showloginform, setshowloginform] = useState(true)
    const showpanel=()=>{
      setshowloginform(!showloginform)
    }

  return (
    <>
    <Header/>
    <div className='w-screen h-[91.8vh] flex items-center justify-center bg-gradient-to-tr from-indigo-700 via-sky-700'>
      <div className='flex flex-col items-center justify-center'>
        <div className='flex items-center gap-10 p-5'>
        {showloginform===true ?<StaffLogin/> :<AdminLogin/> }
          <div className='vmd:hidden bg-sky-700 sm:block mb:hidden rounded-ss-[80%]'>
            <img src='/assets/undraw_my-password_iyga.svg' alt="lost" className='md:w-1/2 hover:bg-cyan-800 p-5 transition-all duration-700 md:translate-x-[30%] rounded-md box-border '/>
            </div>
        </div>
        <div className='flex justify-between items-center px-5'>
        <button onClick={showpanel} className='group flex items-center gap-2 bg-slate-900 text-center py-2 px-2 rounded-md shadow-lg hover:shadow-cyan-700 hover:text-blue-600 hover:tracking-wide transition-all duration-150 vmd:text-[14px]'>{showloginform===true ? <p className='px-2 group-hover:hidden'>Admin Login</p> : <p className='px-2 group-hover:hidden'>Staff Login</p>}<IoMdArrowRoundForward className='group-hover:w-[100px] group-hover:translate-x-3 transition-all duration-1000 text-[25px] hover:scale-110'/></button>
        
        </div>
      </div>
      </div>    
    </>
  )
}

export default Login
