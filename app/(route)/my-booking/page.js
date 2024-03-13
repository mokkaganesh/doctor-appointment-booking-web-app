"use client";
import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import BookingList from './_components/BookingList';
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';
import GlobalApi from '@/app/_utils/GlobalApi';
import { useEffect,useState } from 'react';


function MyBooking() {

    const {user} = useKindeBrowserClient();
    const [bookingList, setBookingList] = useState();

    useEffect(() => {  
        user&&getUserBookingList();
    }, [user])
    const getUserBookingList = () => {
        // API call to get user booking list
        GlobalApi.getUserBookingList(user?.email).then((response) => {
            console.log(response.data);
            setBookingList(response.data.data);
        }
        )

    }

    // Filter user booking list based on upcoming and expired
    const filterUserBooking = (type) => {
        
        const result = bookingList&&bookingList.filter(item =>
            type=="upcoming"? new Date(item.attributes.Date) >= new Date()
            : new Date(item.attributes.Date) < new Date()
        );
        console.log(result);

        return result;
    }
  return (
    <div className='px-4 sm:px-10 mt-10'>
        <h2 className='font-bold text-2xl'>My Booking</h2>
        <Tabs defaultValue="upcoming" className="w-full ">
            <TabsList className='w-full justify-start'>
                <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                <TabsTrigger value="expired">expired</TabsTrigger>
            </TabsList>
            <TabsContent value="upcoming">
                <BookingList bookingList={filterUserBooking("upcoming") } expired={false} updateRecord={()=>getUserBookingList()}/>
                </TabsContent>
            <TabsContent value="expired"><BookingList bookingList={filterUserBooking("expired")} expired={true} updateRecord={()=>getUserBookingList()}/></TabsContent>
        </Tabs>

    </div>
  )
}

export default MyBooking;