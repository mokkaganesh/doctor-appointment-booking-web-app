"use client";
import DoctorList from '@/app/_components/DoctorList';
import GlobalApi from '@/app/_utils/GlobalApi';
import React, { useEffect } from 'react';
import { useState } from 'react';

function Search({params}) {

  const [doctorList, setDoctorList] = useState([]);

  useEffect(() => {
    console.log(params.cname,typeof(params.cname));
    console.log(params)
    getDoctors()
  }
  , [])

  const getDoctors = () => {
    //fetch the doctors
    GlobalApi.getDoctorByCategory(params.cname).then((res) => {
      console.log(res)
      setDoctorList(res.data.data);
      console.log(typeof(res.data.data))
      console.log("ganesh")  
    }).catch((err) => {
      confirm("error");
      console.log(err)
    })

  }
  return (
    <div className='mt-5'>
      <DoctorList  doctorList={doctorList} />
    </div>
  )
}

export default Search;