"use client"
import { GraduationCap, MapPin } from 'lucide-react'
import React from 'react'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import BookAppointment from './BookAppointment'



function DoctorDetail({doctor}) {

    const socialMediaList = [
        {
            id:1,
            name: 'Facebook',
            icon: '/facebook.png',
            link: 'https://facebook.com'
        },
        
        {
            id:2,
            name: 'Twitter',
            icon: '/twitter.png',
            link: 'https://twitter.com'
        },
        {
            id:3,
            name: 'Linkedin',
            icon: '/linkedin.png',
            link: 'https://linkedin.com'
        },
        {
            id:4,
            name: 'youtube',
            icon: '/youtube.png',
            link: 'https://youtube.com'
        },

    ]



  return (
    <>
    <div className='grid grid-cols-1 md:grid-cols-3 border-[1px] p-5 mt-5 rounded-lg'>
          {/* Doctor IMAGE */}
          <div  >
            <Image src={doctor.attributes?.image?.data.attributes.url} alt={doctor.attributes?.Name} width={200} height={250} className='h-[270px] w-full object-cover rounded-lg' />
          </div>

          {/* Doctor Info */}
         <div className='col-span-2 mt-5 m-5 flex flex-col gap-3 items-baseline'>
            <h2 className='font-bold text-2xl'>{doctor.attributes?.Name}</h2>
            <h2 className='flex gap-2 text-gray-500 text-md'>
                <GraduationCap/>
                <span className='text-primary'>{doctor.attributes?.Year_of_Experience} Years of Experience</span>
            </h2>
            <h2 className='text-md gap-2 text-gray-500 flex'>
                <MapPin/>
                <span>{doctor.attributes?.Address}</span>
            </h2>
            <h2 className='text-[10px] bg-blue-100 p-1 rounded-full px-2 text-primary'>
                {doctor.attributes?.categories.data[0].attributes?.Name}
            </h2>

            <div className='flex gap-3'>
                {socialMediaList.map((item, index) => (
                    <Image src={item.icon} alt={item.name} width={20} height={20} key={index} />
                ))}

            </div> 
            <BookAppointment doctor={doctor} />
         </div>

        </div>
        {/* about doctor */}
         <div className='p-3 border-[1px] rounded-lg mt-5'>
                <h2 className='font-bold text-[20px]'>About Me</h2>
                <p className='text-gray-500 tracking-wide mt-2'>{doctor.attributes?.About}</p>
         </div>
    </>
  )
}

export default DoctorDetail;