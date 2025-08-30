import axios from 'axios';
import React, { useState } from 'react';

function AdminNewPassword() {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [otp, setotp] = useState()
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

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
    axios.post(`${process.env.REACT_APP_SECRET_KEY}/adminNewpassword`, { newPassword,confirmPassword,otp }).then(res=>{
      console.log(res)
    }).catch(err=>{

    }).finally(final=>{

    })

  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-slate-900 shadow-md rounded-md ">
      <h2 className="text-xl font-semibold mb-4 text-white text-center">Set Admin New Password</h2>
      
      {error && <p className="text-red-500 mb-2">{error}</p>}
      {success && <p className="text-green-600 mb-2">{success}</p>}

      <form onSubmit={handleSubmit} className="space-y-4 text-black">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Otp
          </label>
          <input
            type="number"
            value={otp}
            onChange={(e) => setotp(e.target.value)}
            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            New Password
          </label>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Confirm Password
          </label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          Update Password
        </button>
      </form>
    </div>
  );
}

export default AdminNewPassword;
