import React, { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
// import CreateAccount from '../Pages/CreateAccount'
// import Login from '../Pages/Login'
// import AdminPanel from '../Admin/AdminPanel'
// import Dashboard from '../Admin/Dashboard'
// import Employees from '../Admin/Employees'
// import Departments from '../Admin/Departments'
// import Leaves from '../Admin/Leaves'
// import Salary from '../Admin/Salary'
// import EmployeePanel from '../Employee/EmployeePanel'
// import EmployeeLeave from '../Employee/EmployeeLeave'
// import EmployeeSalary from '../Employee/EmployeeSalary'
// import EmployeeProfile from '../Employee/EmployeeProfile'
// import EmployeeDashboard from '../Employee/EmployeeDashboard'
const CreateAccount=lazy(()=>import('../Pages/CreateAccount'))
const Login=lazy(()=>import('../Pages/Login'))
const AdminPanel=lazy(()=>import('../Admin/AdminPanel'))
const Dashboard=lazy(()=>import('../Admin/Dashboard'))
const Employees=lazy(()=>import('../Admin/Employees'))
const Departments=lazy(()=>import('../Admin/Departments'))
const Leaves=lazy(()=>import('../Admin/Leaves'))
const Salary=lazy(()=>import('../Admin/Salary'))
const EmployeePanel=lazy(()=>import('../Employee/EmployeePanel'))
const EmployeeLeave=lazy(()=>import('../Employee/EmployeeLeave'))
const EmployeeSalary=lazy(()=>import('../Employee/EmployeeSalary'))
const EmployeeProfile=lazy(()=>import('../Employee/EmployeeProfile'))
const EmployeeDashboard=lazy(()=>import('../Employee/EmployeeDashboard'))
const EmployeeSetting=lazy(()=>import('../Employee/EmployeeSetting'))
const ForgetPassword=lazy(()=>import('../Pages/ForgetPassword'))
const AdminNewPassword=lazy(()=>import('../Admin/AdminNewPassword'))
const AdminSetting=lazy(()=>import('../Admin/AdminSetting'))
const EmployeeNewpassword=lazy(()=>import('../Employee/EmployeeNewpassword'))

function AllRoutes() {
  return (
    <>
    <Routes>
      <Route path="/createAccount" element={<CreateAccount/>}/>
      <Route path="/" element={<Login/>}/>
      <Route path='/ForgetPassword' element={<ForgetPassword/>}/>
      <Route path='/AdminNewPassword' element={<AdminNewPassword/>}/>
      <Route path='/employeeNewpassword' element={<EmployeeNewpassword/>}/>


      <Route path="/adminpanel" element={<AdminPanel/>}/>
      <Route path="/adminDashboard" element={<Dashboard/>}/>
      <Route path="/adminEmployees" element={<Employees/>}/>
      <Route path="/adminDepartments" element={<Departments/>}/>
      <Route path="/adminLeaves" element={<Leaves/>}/>
      <Route path="/adminSalary" element={<Salary/>}/>
      <Route path="/adminSetting" element={<AdminSetting/>}/>


      <Route path="/employeepanel" element={<EmployeePanel/>}/>
      <Route path="/employeeDashboard" element={<EmployeeDashboard/>}/>
      <Route path="/employeeLeaves" element={<EmployeeLeave/>}/>
      <Route path="/employeesalary" element={<EmployeeSalary/>}/>
      <Route path="/employeeprofile" element={<EmployeeProfile/>}/>
      <Route path="/employeeSetting" element={<EmployeeSetting/>}/>
    </Routes>
    </>
  )
}

export default AllRoutes