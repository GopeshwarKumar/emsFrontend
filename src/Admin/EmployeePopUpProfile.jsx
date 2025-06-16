import React from 'react'

function EmployeePopUpProfile(props) {
  return (
    <>
      <h1 className='text-center font-bold '>Employee Details </h1>
      <div className='w-[95%] h-[80%] flex items-center justify-center'>
        <div className='md:w-[80%] w-full h-[80%] flex sm:flex-row flex-col items-center justify-center lg:sm:gap-[50px] sm:gap-[30px] p-10'>
          <div>
            <img src='/logo192.png' alt='fff'/>
          </div>
          <div>
          <p>Name :- {props.data.email}</p>
          <p>Employee ID :- {props.data.department}</p>
          <p>Email :- {props.data.gender}</p>
          <p>DOB :- {props.data.martialstatus}</p>
          <p>Gender :- {props.data.dob}</p>
          <p>Department :- {props.data.name}</p>
          <p>Martial Status :- {props.data.martialstatus}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default EmployeePopUpProfile


// <motion.div className={`absolute left-1/4 top-[15%] bg-gradient-to-br from-slate-900 to-cyan-900 shadow-inner shadow-emerald-500 rounded-md p-5`}>
// <button onClick={()=>{setshowEditForm(false)}} className='float-right bg-red-600 rounded-md px-2 hover:bg-blue-600 transition-all duration-1000'>Hide</button><br/>
// <div className='w-full bg-gradient-to-tr from-indigo-700 via-sky-700 flex flex-col items-center justify-center border-2 border-double border-teal-400 rounded-md my-2'>
//   <h3>Edit Employee</h3>
//       <form onSubmit={EditemployeeDetails} className='grid xl:grid-cols-3 sm:grid-cols-2 mb:grid-cols-1 vmd:grid-cols-1 gap-x-2 gap-y-2 place-content-center content-center p-5'>
//         <div className='flex flex-col gap-2'>
//           <lavel className='text-[14px]'>Name</lavel>
//           <input value={editName} onChange={(e)=>{seteditName(e.target.value)}} placeholder='Enter your Name' className='lg:w-[15vw] md:w-[25vw] sm:w-[30vw] mb:w-[40vw] vmd:w-[80vw] outline-none border-b-[3px] border-blue-800 bg-sky-700 vmd:text-[12px] vmd:py-[5px] py-[10px] px-[10px] text-white text-xl hover:opacity-75 transition-all focus:bg-slate-600  '/>
//         </div>
//         <div className='flex flex-col gap-2'>
//           <lavel className='text-[14px]'>Email</lavel>
//           <input value={editEmail} onChange={(e)=>{}} placeholder='Enter your Email' className='lg:w-[15vw] md:w-[25vw] sm:w-[30vw] mb:w-[40vw] vmd:w-[80vw] outline-none border-b-[3px] border-blue-800 bg-sky-700 vmd:text-[12px] vmd:py-[5px] py-[10px] px-[10px] text-white text-xl hover:opacity-75 transition-all focus:bg-slate-600  '/>
//         </div>
//         <div className='flex flex-col gap-2'>
//           <lavel className='text-[14px]'>Employee Id</lavel>
//           <input value={editEmployeeId} onChange={(e)=>{seteditEmployeeId(e.target.value)}} placeholder='Enter your Id' className='lg:w-[15vw] md:w-[25vw] sm:w-[30vw] mb:w-[40vw] vmd:w-[80vw] outline-none border-b-[3px] border-blue-800 bg-sky-700 vmd:text-[12px] vmd:py-[5px] py-[10px] px-[10px] text-white text-xl hover:opacity-75 transition-all focus:bg-slate-600  '/>
//         </div>
//         <div className='flex flex-col gap-2'>
//           <lavel className='text-[14px]'>Gender</lavel>
//           <input value={editGender} onChange={(e)=>{seteditGender(e.target.value)}} placeholder='Enter your Name' className='lg:w-[15vw] md:w-[25vw] sm:w-[30vw] mb:w-[40vw] vmd:w-[80vw] outline-none border-b-[3px] border-blue-800 bg-sky-700 vmd:text-[12px] vmd:py-[5px] py-[10px] px-[10px] text-white text-xl hover:opacity-75 transition-all focus:bg-slate-600  '/>
//         </div>
//         <div className='flex flex-col gap-2'>
//           <lavel className='text-[14px]'>DOB</lavel>
//           <input value={editDob} onChange={(e)=>{seteditDob(e.target.value)}} type='date' placeholder='Enter your Name' className='lg:w-[15vw] md:w-[25vw] sm:w-[30vw] mb:w-[40vw] vmd:w-[80vw] outline-none border-b-[3px] border-blue-800 bg-sky-700 vmd:text-[12px] vmd:py-[5px] py-[10px] px-[10px] text-white text-xl hover:opacity-75 transition-all focus:bg-slate-600  '/>
//         </div>
//         <div className='flex flex-col gap-2'>
//           <lavel className='text-[14px]'>Martial Status</lavel>
//           <input value={editMartialStatus} onChange={(e)=>{seteditMartialStatus(e.target.value)}} placeholder='Maarried or Unmarried' className='lg:w-[15vw] md:w-[25vw] sm:w-[30vw] mb:w-[40vw] vmd:w-[80vw] outline-none border-b-[3px] border-blue-800 bg-sky-700 vmd:text-[12px] vmd:py-[5px] py-[10px] px-[10px] text-white text-xl hover:opacity-75 transition-all focus:bg-slate-600  '/>
//         </div>
//         <div className='flex flex-col gap-2'>
//           <lavel className='text-[14px]'>Designation</lavel>
//           <input value={editDesignation} onChange={(e)=>{seteditDesignation(e.target.value)}} placeholder='Enter your Name' className='lg:w-[15vw] md:w-[25vw] sm:w-[30vw] mb:w-[40vw] vmd:w-[80vw] outline-none border-b-[3px] border-blue-800 bg-sky-700 vmd:text-[12px] vmd:py-[5px] py-[10px] px-[10px] text-white text-xl hover:opacity-75 transition-all focus:bg-slate-600  '/>
//         </div>
//         <div className='flex flex-col'>
//           <lavel className='text-[14px]'>Department</lavel>
//           <input value={editDepartment} onChange={(e)=>{seteditDepartment(e.target.value)}} placeholder='Enter your Name' className='lg:w-[15vw] md:w-[25vw] sm:w-[30vw] mb:w-[40vw] vmd:w-[80vw] outline-none border-b-[3px] border-blue-800 bg-sky-700 vmd:text-[12px] vmd:py-[5px] py-[10px] px-[10px] text-white text-xl hover:opacity-75 transition-all focus:bg-slate-600  '/>
//         </div>
//         <div className='flex flex-col gap-2'>
//           <lavel className='text-[14px]'>Salary</lavel>
//           <input value={editSalary} onChange={(e)=>{seteditSalary(e.target.value)}} placeholder='Rs XYZ' className='lg:w-[15vw] md:w-[25vw] sm:w-[30vw] mb:w-[40vw] vmd:w-[80vw] outline-none border-b-[3px] border-blue-800 bg-sky-700 vmd:text-[12px] vmd:py-[5px] py-[10px] px-[10px] text-white text-xl hover:opacity-75 transition-all focus:bg-slate-600  '/>
//         </div>
//         <div className='flex flex-col'>
//           <lavel className='text-[14px]'>Role</lavel>
//           <input value={editRole} onChange={(e)=>{seteditRole(e.target.value)}} placeholder='Enter your Name' className='lg:w-[15vw] md:w-[25vw] sm:w-[30vw] mb:w-[40vw] vmd:w-[80vw] outline-none border-b-[3px] border-blue-800 bg-sky-700 vmd:text-[12px] vmd:py-[5px] py-[10px] px-[10px] text-white text-xl hover:opacity-75 transition-all focus:bg-slate-600  '/>
//         </div>
//         <div className='flex flex-col items-center gap-2'>
//         {loader ===true ?  (<Loader></Loader>) : (<button type='submit' className="sm:text-[15px] text-[16px] py-[5px] px-[15px] rounded-[20px] hover:opacity-60 bg-white hover:text-white hover:bg-green-500 text-green-500 duration-200 transition-all ">
//               Edit Employee
//             </button>)}
//             <p className={`text-green-400 font-bold`}>{popUpMessage}
//               <p>{popUpMessage==="Wrong Password" ? <p className="text-red-600">{popUpMessage}</p> : <p className="text-green-500">{popUpMessage}</p>}</p>
//             </p>
//         </div>
//       </form>
//     </div>
//     </motion.div>