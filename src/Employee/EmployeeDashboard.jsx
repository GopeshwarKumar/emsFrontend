import React from 'react'
import EmployeeHeader from './EmployeeHeader'
import EmployeeNavbar from './EmployeeNavbar'

function EmployeeDashboard() {
  return (
    <>
    <EmployeeHeader/>
    <div className="w-screen h-[94vh] flex ">
      <EmployeeNavbar/>
    <div className="lg:w-[88%] w-[75%] bg-slate-900 p-5">
        <h2 className='text-white'>Welcome <mark className='rounded-sm px-2 font-bold'>{localStorage.getItem("employeeName")}</mark></h2>
    </div>
    </div>
    </>
  )
}

export default EmployeeDashboard