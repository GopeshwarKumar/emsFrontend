import React, { lazy, Suspense } from "react";


const Dashboard=lazy(()=>(import('./Dashboard')))

function AdminPanel() {
    

  // const params=useParams()
  // const navigate=useNavigate()
  // const show=(e)=>{
  // console.log(e)
  // if(e==="DashBoard"){
  //     navigate("/adminDashboard")
  // }
  // if(e==="Employees"){
  //     navigate("/adminEmployees")
  // }
  // if(e==="Departments"){
  //     navigate("/adminDepartments")
  // }
  // if(e==="Leaves"){
  //     navigate("/adminLeaves")
  // }
  // if(e==="Salary"){
  //     navigate("/adminSalary")
  // }
  // if(e==="Setting"){
  //     navigate("/adminSetting")
  // }
  // }
  return (
    <> 
      <Suspense fallback={<p className="text-green-500 font-bold italic">Loading</p>}>
        <Dashboard />
      </Suspense>
    </>
  );
}

export default AdminPanel;
