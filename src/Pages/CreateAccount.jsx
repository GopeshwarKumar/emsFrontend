import React, {  useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';
import Header from './Header';
import {ToastContainer, toast } from 'react-toastify';
import {motion} from 'framer-motion'
import Loader from './Loader';

function CreateAccount() {
    const [userName,setuserName]=useState()
    const [email,setemail]=useState()
    const [password,setpassword]=useState()
    const [active, setactive] = useState(false)
    
    const navigate=useNavigate()

    const submitform=async (e)=>{
        e.preventDefault();
        setactive(true)
        
        await axios.post(`${process.env.REACT_APP_SECRET_KEY}/adminaccout`,{userName,email,password}).then(res =>{
          if(res.data.message==='admin accounnt created' && res.status===200){
            navigate("/")
            toast.success(res.data)
          }else{
            toast.warn(res.data.message)
            return
          }
        }).catch(err =>{
          toast.warn("Error found !");
        }).finally(fina =>{
          setactive(false)
        })
    }
  return (
    <>
    <ToastContainer/>
    <div className='w-screen h-screen bg-gradient-to-tr from-indigo-700 via-sky-700 overflow-hidden'>
      <Header/>

    <div className='w-full h-full flex flex-col items-center justify-center gap-[30px] '>
    <motion.h1 initial={{y:10,opacity:0}} whileInView={{y:0,opacity:1}} transition={{duration:0.6}} className=' text-yellow-300 font-bold px-5 p-2 transition-all rounded-xl text-center'>Create Account As Admin</motion.h1>
    <div className='flex items-center justify-center p-[5vw] gap-10'>
    <form action='/createaccount' onSubmit={submitform} method='post' className='flex flex-col items-center gap-2 '>
  <input type='text' required onChange={(e)=>{setuserName(e.target.value)}} name='emai' placeholder='Enter Your Name' className='outline-none rounded 2xl:py-[7px] xl:py-[10px] lg:py-[10px] md:py-[10px] sm:py-[10px] py-[7px] 2xl:px-[20px] xl:px-[20px] lg:px-[20px] sm:px-[20px] px-[10px] font-sans sm:text-[16px] text-[14px] text-black placeholder:text-slate-600 placeholder:hover:tracking-tighter transition-all placeholder:duration-100'/>
  <input type='email' required onChange={(e)=>{setemail(e.target.value)}} name='emai' placeholder='Enter Your email' className='outline-none rounded 2xl:py-[7px] xl:py-[10px] lg:py-[10px] md:py-[10px] sm:py-[10px] py-[7px] 2xl:px-[20px] xl:px-[20px] lg:px-[20px] sm:px-[20px] px-[10px] font-sans sm:text-[16px] text-[14px] text-black placeholder:text-slate-600 placeholder:hover:tracking-tighter transition-all placeholder:duration-100'/>
  <input type='password' required onChange={(e)=>{setpassword(e.target.value)}} placeholder='Enter Your Pass' className='outline-none rounded 2xl:py-[7px] xl:py-[10px] lg:py-[10px] md:py-[10px] sm:py-[10px] py-[7px] 2xl:px-[20px] xl:px-[20px] lg:px-[20px] sm:px-[20px] px-[10px] font-sans sm:text-[16px] text-[14px] text-black placeholder:text-slate-600 placeholder:hover:tracking-tighter transition-all placeholder:duration-100'/>
  <div className='w-[80%] flex flex-row items-center gap-[10px]'>

  <Link to={"/"} className='font-bold font-serif lg:text-[20px] sm:text-[19px] text-[17px] py-[5px] px-[15px] rounded-[20px] hover:opacity-60 hover:underline underline-offset-4 hover:text-green-500 text-yellow-500 duration-200 transition-all'>Login</Link>

  {active ? <Loader/> :<button className='w-full font-bold font-serif lg:text-[17px] sm:text-[15px] text-[14px] py-[5px] px-[15px] rounded-[20px] hover:opacity-60 bg-white hover:text-white hover:bg-green-500 text-green-500 duration-200 transition-all '>Register</button>}
  </div>
    </form>
  <div className='bg-sky-700 h-[300px] w-[300px] sm:block mb:hidden rounded-ss-[80%]'>
  <img src='/assets/undraw_my-password_iyga.svg' alt="lost"/>
  </div>
  </div>
  </div>
  </div>
    </>
  )
}

export default CreateAccount
