import React, { useEffect, useState } from 'react'
import EmployeeHeader from './EmployeeHeader'
import EmployeeNavbar from './EmployeeNavbar'
import axios from 'axios'
// import { useContext } from 'react'
// import { auth } from '../Auth/Authprovider'

function EmployeeProfile() {

  // const authprofile=useContext(auth)
  const [employeeDetails, setemployeeDetails] = useState([])

  useEffect(()=>{
    const email=localStorage.getItem('employeeEmail')
    axios.post(`https://emdbackend.onrender.com/getemployeeDetails`,{email}).then(res=>{
      setemployeeDetails(res.data.message)
    }).catch(Er=>{
      alert('Error found !')
    })
  },[])

  return (
    <>
    <div className='overflow-hidden h-screen'>
    <EmployeeHeader/>
    <div className="w-screen h-[94vh] flex">
    <EmployeeNavbar/>
    <div className="lg:w-[88%] w-[73%] bg-slate-900">
        <h1 className="text-center p-4 rounded-lg shadow-xl vmd:text-[30px] hover:shadow-slate-800 transition-all">Employee Details </h1>
      <div className='w-[95%] h-[80%] p-5 flex items-center justify-center'>
        <div className='md:w-[80%] w-full min-h-[80%] py-5 shadow-2xl rounded-md flex md:flex-row vmd:flex-col items-center justify-center lg:sm:gap-[50px] sm:gap-[30px] sm:text-[18px] vmd:text-[14px]'>
          <div>
            
            <img src='/assets/profile.svg' alt='fff' loading='lazy' className='w-full h-full hover:scale-105 transition-all'/>
          </div>
          <div>
          <p>Name :- <mark className='px-1 bg-red-600 rounded-md'>{employeeDetails.name}</mark></p>
          <p>Employee ID :- {employeeDetails.id}</p>
          <p>Email :- <mark className='px-2 py-1 rounded-l-lg'>{employeeDetails.email}</mark></p>
          <p>DOB :- {employeeDetails.dob}</p>
          <p>Gender :- {employeeDetails.gender}</p>
          <p>Department :- {employeeDetails.department}</p>
          <p>Martial Status :- {employeeDetails.martialstatus}</p>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default EmployeeProfile
