"use client"
import React, { useEffect, useState } from 'react'
import { Input } from "@/components/ui/input"
import { Search } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button';
import GlobalApi from '../_utils/GlobalApi';
import Image from 'next/image';


function CategorySearch() {

  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    getCategoryList()
  }, [])

  const getCategoryList = () => {
    GlobalApi.getCategory().then((res) => {
      setCategoryList(res.data.data);
      console.log(res.data.data)
    }).catch((err) => {
      console.log(err)
    })

  }

  return (
    <div className='mb-10 px-5 items-center flex flex-col gap-2'>
        <h2 className='font-bold text-4xl tracking-wide'>Search <span className='text-primary'>Doctors</span></h2>
        <h2 className='text-gray-500 text-xl'>Search Your Doctor and Book Appointement in one Click</h2>
        <div className="flex w-full mt-3 max-w-sm items-center space-x-2">
            <Input type="text" placeholder="Search..." />
            <Button type="submit">
                <Search className='h-4 w-4'/>
                Search</Button>
        </div>

        {/* display the categoryList */}
        <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 mt-5'>
          {categoryList.length > 0 ?categoryList.map((item, index) => index<6 && (
              <Link href={'/search/'+item.attributes.Name} key={index} className='flex flex-col  text-center items-center
              p-5 bg-blue-50 m-2 rounded-lg gap-2 hover:scale-110 transi ease-in-out cursor-pointer '>
                
                <Image src={item.attributes?.Icon?.data.attributes?.url} alt={item.attributes.Name} width={40} height={40} />
                <label className='text-blue-600 text-sm'>{item.attributes.Name}</label>
              </Link>
              
          ))
          :                       
          [1,2,3,4,5,6].map((item, index) => (
            <div className='bg-slate-200 m-2 w-[100px] h-[120px] rounded-lg animate-pulse'>
                {/* skeleton effect for view  */}

            </div>
            ))
          }
        </div>

    </div>
  )
}

export default CategorySearch