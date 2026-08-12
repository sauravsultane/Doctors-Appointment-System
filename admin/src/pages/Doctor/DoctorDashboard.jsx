import React, { useContext, useEffect } from 'react';
import { DoctorContext } from '../../context/DoctorContext';
import assets from '../../assets/assets';

const DoctorDashboard = () => {
  const { dToken, dashData, getDashData, completeAppointment, cancelAppointment } = useContext(DoctorContext);

  useEffect(() => {
    if (dToken) {
      getDashData();
    }
  }, [dToken]);

  return dashData && (
    <div className='m-5'>
      <div className='flex flex-wrap gap-3'>
        <div className='flex items-center gap-2 bg-white p-4 min-w-52 rounded border-2 border-gray-100 cursor-pointer hover:scale-105 transition-all'>
          <img className='w-14' src={assets.earning_icon} alt="" />
          <div>
            <p className='text-xl font-semibold text-gray-600'>${dashData.earnings}</p>
            <p className='text-gray-400'>Earnings</p>
          </div>
        </div>
        <div className='flex items-center gap-2 bg-white p-4 min-w-52 rounded border-2 border-gray-100 cursor-pointer hover:scale-105 transition-all'>
          <img className='w-14' src={assets.appointments_icon} alt="" />
          <div>
            <p className='text-xl font-semibold text-gray-600'>{dashData.appointments}</p>
            <p className='text-gray-400'>Appointments</p>
          </div>
        </div>
        <div className='flex items-center gap-2 bg-white p-4 min-w-52 rounded border-2 border-gray-100 cursor-pointer hover:scale-105 transition-all'>
          <img className='w-14' src={assets.patients_icon} alt="" />
          <div>
            <p className='text-xl font-semibold text-gray-600'>{dashData.patients}</p>
            <p className='text-gray-400'>Patients</p>
          </div>
        </div>
      </div>

      <div className='bg-white border rounded mt-10'>
        <div className='flex items-center gap-2.5 px-4 py-4 rounded-t border-b'>
          <img src={assets.list_icon} alt="" />
          <p className='font-semibold text-lg'>Latest Appointments</p>
        </div>
        <div className='pt-4'>
          {dashData.latestAppointments.map((item, index) => (
            <div className='flex items-center justify-between px-4 py-3 border-b hover:bg-gray-50' key={index}>
              <div className='flex items-center gap-3'>
                <img className='w-10 rounded-full' src={item.userData.image} alt="" />
                <div>
                  <p className='font-medium text-gray-800'>{item.userData.name}</p>
                  <p className='text-sm text-gray-600'>{item.slotDate}</p>
                </div>
              </div>
              {item.cancelled ? (
                <p className='text-red-400 text-xs font-medium'>Cancelled</p>
              ) : item.isCompleted ? (
                <p className='text-green-500 text-xs font-medium'>Completed</p>
              ) : (
                <div className='flex gap-2 text-sm text-center'>
                  <button onClick={() => cancelAppointment(item._id)} className='px-4 py-1 border border-red-500 text-red-500 rounded hover:bg-red-500 hover:text-white transition-all'>Reject</button>
                  <button onClick={() => completeAppointment(item._id)} className='px-4 py-1 border border-green-500 text-green-500 rounded hover:bg-green-500 hover:text-white transition-all'>Accept</button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DoctorDashboard;
