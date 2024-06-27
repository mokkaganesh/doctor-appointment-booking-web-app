import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function  DoctorList(doctorList) {
    console.log(doctorList)
  return (
    <div className='mb-10 px-10'>  
        <h2 className='font-bold text-xl'>Popular Doctors  </h2>
        <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-7 mt-4'>
            {!doctorList.length > 0?doctorList.doctorList.map((item, index) => (
                    <div key={index} className='border-[1px] rounded-lg p-3 cursor-pointer hover:border-primary hover:shadow-sm transition-all ease-in-out'>
                        <Image src={item.attributes?.image?.data.attributes?.url} alt={item.attributes.Name} width={500} height={200} className='h-[200px] w-full object-cover rounded-lg' />
                        <div className='mt-3 items-baseline flex flex-col gap-2'>
                            <h2 className='text-[10px] bg-blue-100 p-1 rounded-xl px-2 text-primary'>{item.attributes?.categories?.data[0]?.attributes?.Name}</h2>
                            <h2 className='font-bold'>{item.attributes?.Name}</h2>
                            <h2 className='text-primary text-sm'>{item.attributes?.Year_of_Experience}</h2>
                            <h2 className='text-gray-500 text-sm'>{item.attributes?.Address}</h2>
                            <Link href={'/details/'+item?.id} className='w-full' >

                                <h2 className='p-2 px-3 border-[1px] border-primary text-primary rounded-full w-full text-center text-[11px] mt-2 cursor-pointer hover:bg-primary hover:text-white'>Book Now</h2>
                            </Link>
                        </div>
                        
                    </div>
               
            )) 
            :
            [1,2,3,4,5,6].map((item, index) => (
            <div className='h-[220px] bg-slate-200 w-full rounded-lg animate-pulse'>
                {/* skeleton effect for view  */}
            </div>
            ))

            }
        </div>
    </div>
  )
}

export default DoctorList;
