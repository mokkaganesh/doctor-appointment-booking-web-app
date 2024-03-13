import GlobalApi from '@/app/_utils/GlobalApi'
import React, { useEffect } from 'react'
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import moment from 'moment'
import Image from 'next/image'

import { MapPin,Clock,CalendarDays } from 'lucide-react'
import { Calendar } from "@/components/ui/calendar"
import { Button } from '@/components/ui/button'
import CancelAppointment from './CancelAppointment'
import { toast } from 'sonner'



function BookingList({bookingList,expired=false,updateRecord}) {

    const onDeleteBooking = (item) => {
      console.log(item);
        // API call to delete booking
        GlobalApi.deleteBooking(item.id).then((response) => {
            console.log(response.data);
            if(response){
              toast.success('Booking Deleted Successfully');
              updateRecord();
            }
            // getUserBookingList();
        }
        )
    }


  return (
    <div className='mb-5'>
        <div className='flex flex-col'>
            {bookingList&&bookingList?.map((item, index) => (
                <div key={index} className='flex gap-4 items-center  border  border-gray-200 rounded-lg p-4 mt-4'>
                    <Image src={item.attributes.doctor?.data.attributes?.image?.data?.attributes?.url} alt={item.attributes.Name} width={70} height={70} 
                    className='rounded-full h-[70px] w-[70px] object-cover'/>

                    <div className='flex flex-col gap-2 w-full'>
                      <h2 className='font-bold text-[18px] items-center flex justify-between'>{item.attributes.doctor.data.attributes.Name}
                      {!expired&&<CancelAppointment onContinueClick={()=>onDeleteBooking(item)}/>}
                      </h2>
                      <h2 className='flex gap-2 text-gray-500'><MapPin className='text-primary h-5 w-5'/> {item.attributes.doctor.data.attributes.Address}</h2>
                      <h2 className='flex gap-2 text-gray-500'><CalendarDays className='text-primary h-5 w-5'/> Appointment on : {moment(item.attributes.Date).format('DD-MMM-YYYY')}</h2>
                      <h2 className='flex gap-2 text-gray-500'><Clock className='text-primary h-5 w-5'/> AT Time : {item.attributes.Time }</h2>
                    </div>
                </div>   
            ))}
        </div>
    </div>
  )
}

export default BookingList