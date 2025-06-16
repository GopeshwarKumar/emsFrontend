import React, { createContext } from 'react'
import { useState } from 'react'

export const auth=createContext()

function Authprovider({children}) {

  const [employeeProfile, setemployeeProfile] = useState([])
  const [fetchSalaryUsingEmail, setfetchSalaryUsingEmail] = useState()
  const employeeLeaveData=[]
  return (
    <>
    <auth.Provider value={{employeeProfile,setemployeeProfile,employeeLeaveData,fetchSalaryUsingEmail, setfetchSalaryUsingEmail}}>
    {children}
    </auth.Provider>
    </>
  )
}

export default Authprovider;
