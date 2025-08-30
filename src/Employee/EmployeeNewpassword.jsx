import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import Loader from '../Pages/Loader';

function EmployeeNewpassword() {

  const navigate=useNavigate()

  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [otp, setotp] = useState()
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [active, setactive] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    setactive(true)
    setError('');
    setSuccess('');

    if (!newPassword || !confirmPassword) {
      setError('Please fill in both fields.');
      return;
    }

    if (newPassword !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    axios.post(`https://emdbackend.onrender.com/employeeNewpassword`, { newPassword,confirmPassword,otp }).then(res=>{

      res.data.message=== 'otp sent to email' ? toast.success(res.data.message) : toast.warn(res.data.message)
      if(res.status=== 200 && res.data.message=== 'password changed successfully'){
        navigate('/')
      }
    }).catch(err=>{

    }).finally(final=>{
      setactive(false)
    })

  };

  return (
    <>
    <ToastContainer className={`text-[14px]`}/>
    <div className="max-w-md mx-auto mt-10 p-6 bg-slate-900 shadow-md rounded-md ">
      <h2 className="text-xl font-semibold mb-4 text-white text-center">Set Employee New Password</h2>
      
      {error && <p className="text-red-500 mb-2">{error}</p>}
      {success && <p className="text-green-600 mb-2">{success}</p>}

      <form onSubmit={handleSubmit} className="space-y-4 text-black">
        <div>
          <label className="block text-sm font-medium text-white">
            Otp
          </label>
          <input
            type="number" required
            value={otp}
            onChange={(e) => setotp(e.target.value)}
            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-white">
            New Password
          </label>
          <input
            type="password" required
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-white">
            Confirm Password
          </label>
          <input
            type="password" required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500"
          />
        </div>

        {active===false ? <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          Update Password
        </button> :<Loader/>}
      </form>
    </div>
    </>
  );
}

export default EmployeeNewpassword
