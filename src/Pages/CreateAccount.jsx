import React, {  useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';
import Header from './Header';
import { Bounce, ToastContainer, toast } from 'react-toastify';

function CreateAccount() {
    const [userName,setuserName]=useState()
    const [email,setemail]=useState()
    const [password,setpassword]=useState()
        // const [showloginform, setshowloginform] = useState(true)

    const navigate=useNavigate()

    const submitform=async (e)=>{
        e.preventDefault();
        
        await axios.post(`${process.env.REACT_APP_SECRET_KEY}/adminaccout`,{userName,email,password}).then(res =>{
          // console.log(res)
          if(res.status===200){
            // console.log(res.data.message)
            navigate("/")
            toast.success(res.data.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
            });
          }
        }).catch(err =>{
          // console.log(err)
          toast.warn(err, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
            });
        }).finally(fina =>{
          // navigate("/loginpage")
        })
        // navigate("/loginuser")
    }

    // const showpanel=()=>{
    //   setshowloginform(!showloginform)
    // }
  return (
    <>
    <ToastContainer/>
    <div className='w-screen h-screen bg-gradient-to-tr from-indigo-700 via-sky-700 overflow-hidden'>
      <Header/>

<div className='w-full h-full flex flex-col items-center justify-center gap-[30px] '>
<h5 className=' text-yellow-300 font-bold px-5 p-2 hover:skew-y-2 transition-all rounded-xl text-center'>Create Account As Admin</h5>
<div className='flex items-center justify-center gap-10'>
<form action='/createaccount' onSubmit={submitform} method='post' className='flex flex-col items-center gap-2 '>
  <input type='text' required onChange={(e)=>{setuserName(e.target.value)}} name='emai' placeholder='Enter Your Name' className='outline-none rounded 2xl:py-[7px] xl:py-[10px] lg:py-[10px] md:py-[10px] sm:py-[10px] py-[7px] 2xl:px-[20px] xl:px-[20px] lg:px-[20px] sm:px-[20px] px-[10px] font-sans sm:text-[16px] text-[14px] text-black placeholder:text-slate-600 placeholder:hover:tracking-tighter transition-all placeholder:duration-100'/>
  <input type='email' required onChange={(e)=>{setemail(e.target.value)}} name='emai' placeholder='Enter Your email' className='outline-none rounded 2xl:py-[7px] xl:py-[10px] lg:py-[10px] md:py-[10px] sm:py-[10px] py-[7px] 2xl:px-[20px] xl:px-[20px] lg:px-[20px] sm:px-[20px] px-[10px] font-sans sm:text-[16px] text-[14px] text-black placeholder:text-slate-600 placeholder:hover:tracking-tighter transition-all placeholder:duration-100'/>
  <input type='password' required onChange={(e)=>{setpassword(e.target.value)}} placeholder='Enter Your Pass' className='outline-none rounded 2xl:py-[7px] xl:py-[10px] lg:py-[10px] md:py-[10px] sm:py-[10px] py-[7px] 2xl:px-[20px] xl:px-[20px] lg:px-[20px] sm:px-[20px] px-[10px] font-sans sm:text-[16px] text-[14px] text-black placeholder:text-slate-600 placeholder:hover:tracking-tighter transition-all placeholder:duration-100'/>
  <div className='w-[80%] flex flex-col items-center gap-[10px]'>
  <button className='w-full font-bold font-serif lg:text-[17px] sm:text-[15px] text-[14px] py-[5px] px-[15px] rounded-[20px] hover:opacity-60 bg-white hover:text-white hover:bg-green-500 text-green-500 duration-200 transition-all '>Register</button>
  <Link to={"/"} className='font-bold font-serif lg:text-[20px] sm:text-[19px] text-[17px] py-[5px] px-[15px] rounded-[20px] hover:opacity-60 underline underline-offset-4 hover:text-white text-green-500 duration-200 transition-all '>Login</Link>
  </div>
</form>
<div className='bg-sky-700 w-full h-full sm:block mb:hidden rounded-ss-[80%]'><img src='/logo192.png' alt="lost"/></div>
</div>
{/* <button onClick={showpanel} className='bg-slate-700 text-center py-2 px-5 rounded-2xl hover:opacity-100 transition-all duration-150 opacity-55'>Admin</button> */}
</div>
</div>
    </>
  )
}

export default CreateAccount