import React from "react";
import EmployeeNavbar from '../Employee/EmployeeNavbar'
import EmployeeHeader from "./EmployeeHeader";
import { useEffect } from "react";
import axios from 'axios'
import { useState } from "react";
import { toast } from "react-toastify";

function EmployeeSalary() {

  const [salaryDetails, setsalaryDetails] = useState([])

  useEffect(()=>{
    const email=localStorage.getItem('employeeEmail')
    if(!email){
      return toast.warn('Email not retrive to fetch salary')
    }
    axios.post(`https://emdbackend.onrender.com/getEmployeesalaryDetails`,{email}).then(res=>{
      setsalaryDetails(res.data)
    }).catch(er=>{
      alert('salary fetch error')
    }).finally(final =>{
      
    })
  },[])
  return (
    <>
      {/* dashboard */}
      <EmployeeHeader/>
      <div className="w-screen h-[94vh] flex">
        <EmployeeNavbar />
        <div className="lg:w-[88%] w-[75%] bg-slate-900">
          <div className="">
            <h2 className="text-center py-3 rounded-lg shadow-xl hover:shadow-slate-800 transition-all">Salary History</h2>
            <div className="w-full flex items-center justify-between px-5 py-3">
              <div>
                <input
                  placeholder="Search By Id"
                  className="lg:w-[15vw] md:w-[25vw] sm:w-[30vw] mb:w-[40vw] vmd:w-[80vw] outline-none border-b-[3px] border-blue-800 bg-sky-700 text-[15px] vmd:py-[5px] py-[10px] px-[10px] text-white hover:opacity-75 transition-all focus:bg-slate-600  "
                />
              </div>
            </div>
            <div className="hidescroller w-full  text-nowrap overflow-x-scroll p-5">
              <table className="w-full text-nowrap">
                <tr className={`overflow-x-scroll text-[15px] text-nowrap`}>
                  <th className="bg-blue-500 rounded-md  hover:opacity-70 px-3">SI No.</th>
                  <th className="bg-yellow-300 rounded-md  hover:opacity-70 px-2">Id</th>
                  <th className="bg-red-500 rounded-md  hover:opacity-70">Salary</th>
                  <th className="bg-emerald-500 rounded-md  hover:opacity-70 px-3">Allowance</th>
                  <th className="bg-rose-600 rounded-md  hover:opacity-70 px-2">Deduction</th>
                  <th className="bg-red-600 rounded-md  hover:opacity-70 px-2">Total</th>
                  <th className="bg-green-500 rounded-md  hover:opacity-70 px-2">Pay Date</th>
                </tr>
                {salaryDetails.map((e,x)=>{
                  return <tr key={x} className={`hover:bg-slate-950 h-[50px]`}>
                  <th className="text-nowrap px-4">{x+1}</th>
                  <th className="text-nowrap px-4">{'id'}</th>
                  <th className="text-nowrap px-4">{e.basicsalary}</th>
                  <th className="text-nowrap px-4">{e.allowance}</th>
                  <th className="text-nowrap px-4">{e.deduction}</th>
                  <th className="text-nowrap">{(e.basicsalary)+(e.allowance)-e.deduction}</th>
                  <th className="text-nowrap px-4">{e.paydate.split("T")[0]}</th>
                </tr>
                })}
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
// .split("T")[0]
export default EmployeeSalary
