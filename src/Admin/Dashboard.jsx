import React, { lazy, Suspense } from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios'
import { FaPeopleGroup } from "react-icons/fa6";
import { FcDepartment } from "react-icons/fc";
import { AiFillAlipayCircle } from "react-icons/ai";
import { MdOutlinePendingActions } from "react-icons/md";
import { FcApproval } from "react-icons/fc";
import { FcDisapprove } from "react-icons/fc";
import { ToastContainer } from "react-toastify";

const AdminNavbar=lazy(()=>(import('./AdminNavbar')))
const AdminHeader=lazy(()=>(import('./AdminHeader')))


function Dashboard() {

  const [totalEmployee, settotalEmployee] = useState()
  const [totaldepart, settotaldepart] = useState()
  const [totalSalary, settotalSalary] = useState()
  const [totalLeaveapproved, settotalLeaveapproved] = useState([])
  
  useEffect(()=>{
    settotalEmployee('Loading')
    axios.get(`https://emdbackend.onrender.com/showEmployee`).then(res=>{
      settotalEmployee(res.data.length)
    }).catch(err=>{
      alert('Error in fetching Employee !')
    }).finally(final=>{
      // toast.success('Employee count done')
    })
  },[])

  useEffect(()=>{
    settotaldepart('Loading')
    axios.get(`https://emdbackend.onrender.com/getAlldepartments`).then(res=>{
      settotaldepart(res.data.length)
    }).catch(err=>{
      alert('Error in fetching department !')
    }).finally(final=>{
      // toast.success('Department count done')
    })
  },[])

  useEffect(()=>{
    settotalLeaveapproved('Loading')
    axios.get(`https://emdbackend.onrender.com/showleaves`).then(res=>{
      settotalLeaveapproved(res.data.alleaves)
    }).catch(err=>{
      alert('Error in fetching leave !')
    }).finally(final=>{
      // toast.success('Leave count done')
    })
  },[])

  useEffect(()=>{
    settotalSalary('Loading')
    axios.get(`https://emdbackend.onrender.com/showsalary`).then(res=>{
      let sum=0
      res.data.map((e,x)=>{
         sum=sum+e.allowance+e.basicsalary+e.deduction
        return settotalSalary(sum)
      })
    }).catch(err=>{
      alert('Error in fetching total salary !')
    }).finally(final=>{
      // toast.success('Salary count done')
    })
  },[])

  return (
    <>
    <ToastContainer className={`text-[15px]`}/>
      {/* dashboard */}
      <Suspense fallback={<p>Loading...</p>}>
        <AdminHeader/>
      </Suspense>
      <div className="w-screen h-[94vh] flex">
        <Suspense fallback={<p>Loading...</p>}>
          <AdminNavbar/>
        </Suspense>
      <div className='lg:w-[88%] w-[75%] bg-slate-900'>
      <div className="mt-[5%]">
        <h2 className="text-center p-4 font-bold rounded-lg shadow-xl hover:shadow-slate-800 transition-all">DashBoard OverView</h2>
        <div className="flex items-center w-full justify-evenly flex-wrap gap-3 mt-[3%]">

          <div className="flex items-center gap-1  bg-slate-900 p-5 shadow-xl hover:shadow-slate-800 transition-all">
           <FaPeopleGroup className="md:w-[70px] w-10 md:h-[50px] h-[50px] text-[30px] bg-slate-500 "/>
            <div className="bg-white h-[50px] px-1 text-black font-bold text-center ">
              Total Employees<br/><mark className="px-1">{totalEmployee}</mark>
            </div>
          </div>

          <div className="flex items-center gap-1 bg-slate-900 p-5 shadow-xl hover:shadow-slate-800">
            <FcDepartment className="md:w-[70px] w-10 md:h-[50px] h-[50px] text-[30px] bg-slate-500 "/>
            <div className="bg-white h-[50px] px-1 text-black font-bold text-center">
              Total Departments<br/><mark className="px-1">{totaldepart}</mark>
              </div>
          </div>
          <div className="flex items-center gap-1 bg-slate-900 p-5 shadow-xl hover:shadow-slate-800 transition-all">
            <AiFillAlipayCircle className="md:w-[70px] w-10 md:h-[50px] h-[50px] text-[30px] bg-slate-500 "/>
            <div className="bg-white h-[50px] text-black font-bold px-2 text-center">
              Monthly Pay<br/><mark className="px-1">Rs. {totalSalary}</mark>
          </div>
          </div>
        </div>

        <h2 className="text-center font-bold mt-[5%] rounded-lg p-5 shadow-xl hover:shadow-slate-800 transition-all">Leave Details</h2>
        <div className="flex flex-wrap items-center justify-evenly md:gap-0 gap-5 py-5">
          <div className="flex items-center gap-1  bg-slate-900 p-5 shadow-xl hover:shadow-slate-800 transition-all">
            <FcDepartment className="md:w-[70px] w-10 md:h-[50px] h-[50px] text-[30px] bg-slate-500"/>
            <div className="bg-white h-[50px] text-black font-bold px-2 text-center">
              Leave Applied<br/><mark className="px-1">{totalLeaveapproved.length}</mark>
              </div>
          </div>
          <div className="flex items-center gap-1  bg-slate-900 p-5 shadow-xl hover:shadow-slate-800 transition-all">
            <FcApproval  className="md:w-[70px] w-10 md:h-[50px] h-[50px] text-[30px] bg-slate-500"/>
            <div className="bg-white h-[50px] text-black font-bold px-2 text-center">
              Leave Approved<br/><mark className="px-1">0</mark>
              </div>
          </div>
          <div className="flex items-center gap-1  bg-slate-900 p-5 shadow-xl hover:shadow-slate-800 transition-all">
            <MdOutlinePendingActions className="md:w-[70px] w-10 md:h-[50px] h-[50px] text-[30px]  bg-slate-500"/>
            <div className="bg-white h-[50px] text-black font-bold px-2 text-center">
              Leave Pending<br/><mark className="px-1">0</mark>
              </div>
          </div>
          <div className="flex items-center gap-1  bg-slate-900 p-5 shadow-xl hover:shadow-slate-800 transition-all">
            <FcDisapprove   className="md:w-[70px] w-10 md:h-[50px] h-[50px] text-[30px]  bg-slate-500"/>
            <div className="bg-white h-[50px] text-black font-bold px-2 text-center">
              Leave Rejected<br/><mark className="px-1">0</mark>
              </div>
          </div>
        </div>
      </div>
      </div>
      </div>
    </>
  );
}

export default Dashboard;
