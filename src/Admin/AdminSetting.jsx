import axios from "axios";
import React, { useState } from "react";
import Loader from '../Pages/Loader'
import {useNavigate } from "react-router-dom";
import {ToastContainer, toast } from 'react-toastify';

function AdminSetting() {
  const navigate = useNavigate();
  const [email, setemail] = useState();
  const [active, setactive] = useState(false);

  const submitform = async (e) => {
    e.preventDefault();
    setactive(true);

    axios.post(`${process.env.REACT_APP_SECRET_KEY}/adminforgotpassword`, { email }).then((res) => {
      res.data.message==='otp sent to email' ? toast.success(res.data.message) : toast.warn(res.data.message)
      if(res.status===200 && res.data.message==='otp sent to email'){
        navigate('/AdminNewPassword')
      }
      }).catch((err) => {
        alert('Error found !')
      }).finally((final) => {
        setactive(false);
      });
  }
  return (
    <>
    <ToastContainer/>
      <div className="w-screen h-screen
       px-[5vw] py-[2vh] bg-slate-900 rounded-md flex flex-col items-center justify-center gap-[30px]">
        <h4 className="shadow-md px-5 text-center hover:shadow-slate-800 text-yellow-300 font-bold p-2 transition-all hover:rounded-tl-3xl">
          Reset Admin Password
        </h4>

        <form
          onSubmit={submitform}
          method="post"
          className="flex flex-col items-center  justify-center gap-[15px] "
        >
          <div className="flex flex-col justify-center">
            <label>Email</label>
            <input type="email" required onChange={(e) => {
              setemail(e.target.value);
            }} value={email}
            name="email" placeholder="Enter Your Email" className="outline-none rounded 2xl:py-[7px] xl:py-[10px] lg:py-[10px] md:py-[10px] sm:py-[10px] py-[7px] 2xl:px-[20px] xl:px-[20px] lg:px-[20px] sm:px-[20px] px-[10px] font-sans sm:text-[16px] text-[14px] text-black placeholder:text-slate-600 placeholder:hover:tracking-tighter transition-all placeholder:duration-100"
          />
          </div>
          <div className="w-full flex flex-col gap-[5px]">
            <div className="flex items-center justify-between ">
            </div>
            <div className="flex mt-2 items-center justify-center">
              {active === false ? (
                <button className="text-[16px] py-[5px] px-[15px] rounded-[20px] hover:opacity-60 bg-white hover:text-white hover:bg-green-500 text-green-500 duration-200 transition-all ">
                  Send Otp
                </button>
              ) : (
                <Loader></Loader>
              )}
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default AdminSetting
