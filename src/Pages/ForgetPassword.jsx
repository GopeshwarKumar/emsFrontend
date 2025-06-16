import React from 'react'
import Loader from './Loader';
import { useState } from 'react';

function ForgetPassword(props) {
  const [email, setemail] = useState()
  const [active, setactive] = useState(false)
    
  const sendotp=(e)=>{
    e.preventDefault()
    setactive(true)
  }
  return (
    <>
    <div className='w-screen h-screen flex items-center justify-center bg-gradient-to-tr from-indigo-700 via-sky-700'>
      <div className='flex flex-col items-center justify-center'>
        <div className='flex items-center gap-10 p-5'>
            {/* forget  */}
          <div className='bg-sky-700 w-full h-full sm:block mb:hidden rounded-ss-[80%]'>
            <img src='/logo192.png' alt="lost"/></div>
            <form onSubmit={sendotp} method="post"
                      className="flex flex-col p-10 shadow-slate-950 shadow-2xl bg-slate-900 rounded-md scale-100 hover:scale-95 transition-all"
                    >
                      <h2 className='py-5 text-center text-nowrap font-bold'>Forget Passwword</h2>
                      <label>Email</label>
                      <input
                        type="email"
                        required
                        onChange={(e) => {
                          setemail(e.target.value);
                        }}
                        value={email}
                        name="emai"
                        placeholder="Enter Your Email"
                        className="outline-none rounded 2xl:py-[7px] xl:py-[10px] lg:py-[10px] md:py-[10px] sm:py-[10px] py-[7px] 2xl:px-[20px] xl:px-[20px] lg:px-[20px] sm:px-[20px] px-[10px] font-sans sm:text-[16px] text-[14px] text-black placeholder:text-slate-600 placeholder:hover:tracking-tighter transition-all placeholder:duration-100"
                      />
                      <div className="w-full flex flex-col gap-[5px]">
                        <div className="flex mt-2 items-center justify-center">
                          {active === false ? (
                            <button className="text-[16px] py-[5px] px-[15px] rounded-[20px] hover:opacity-60 bg-white hover:text-white hover:bg-green-500 focus:text-blue-700 text-green-500 duration-200 transition-all ">
                              send otp
                            </button>
                          ) : (
                            <Loader></Loader>
                          )}
                        </div>
                      </div>
                    </form>
        </div>
      </div>
      </div>    
    </>
  )
}

export default ForgetPassword