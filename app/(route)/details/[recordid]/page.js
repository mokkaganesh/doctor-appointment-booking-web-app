"use client";
import GlobalApi from '@/app/_utils/GlobalApi';
import React, { useEffect } from 'react'
import { useState } from 'react';
import Image from 'next/image';
import DoctorDetail from '../_components/DoctorDetail';
import DoctorSuggestionList from '../_components/DoctorSuggestionList';

function Details({params}) {
  
  
      const [ doctor, setDoctor ] = useState([]);
  
      useEffect(() => {
        getDoctorById();
      }, []);

  const getDoctorById = () => {
    // get the doctor details by id

      GlobalApi.getDoctorById(params.recordid).then((res) => {
        console.log(res.data.data)
        setDoctor(res.data.data);
      }).catch((err) => {
        console.log(err)
      })

    }
  
  return (
    <div className='p-5 md:px-20'>
      <h1 className='font-bold text-[22px] '>Details</h1>
      
      <div className='grid grid-cols-1 md:grid-cols-4 gap-5 mt-5'>
        {/* Doctor Details */}
        
        <div className='col-span-3'>
            {doctor && <DoctorDetail doctor={doctor}/>}
        </div>
        {/* Doctor Suggestion  */}
        <div>
          <DoctorSuggestionList/>
        </div>
      </div>

    </div>
  )
}

export default Details;