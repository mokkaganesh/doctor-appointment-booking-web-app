"use client";
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import GlobalApi from '@/app/_utils/GlobalApi'
import { useEffect, useState } from 'react'
import {
    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
  } from "@/components/ui/command"
import { usePathname } from 'next/navigation';
  


function CategoryList() {


const [categoryList, setCategoryList] = useState([]);
const params=usePathname();
console.log(params) 
//incase of space in the url
const  catergory=params.split('/')[2].split("%20").join(" ") ;
console.log(catergory)
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
    <div className='h-screen mt-5 flex flex-col'>
        <Command>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList className='overflow-visible'> {/*className='overflow-visible'*/}
            <CommandEmpty>No results found</CommandEmpty>
            <CommandGroup heading="suggestions" >
              {categoryList&& categoryList.length >0 ?categoryList.map((item, index) => (
                  <CommandItem key={index}>
                      <Link href={'/search/'+item.attributes.Name} className={`p-2 flex gap-2 ext-[14 px] text-blue-600 items-center rounded-md cursor-pointer  w-full ${catergory==item.attributes.Name && 'bg-blue-100'}`}>
                          <Image src={item.attributes?.Icon?.data.attributes?.url} alt={item.attributes.Name} width={25} height={25} />   
                          <label htmlFor="">{item.attributes.Name}</label>
                       </Link>
                      {/* <Link href="" key={index}  className='flex flex-row  text-center items-center p-5 bg-blue-50 m-2 rounded-lg gap-2 hover:scale-110 transi ease-in-out cursor-pointer '>
                          
                          <Image src={item.attributes?.Icon?.data.attributes?.url} alt={item.attributes.Name} width={25} height={25} />
                          <label className='text-blue-600 text-[10px]'>{item.attributes.Name}</label>
                      </Link> */}
                  </CommandItem>
              ))
              :
              [1,2,3,4,5,6].map((item, index) => (
                  <CommandItem key={index}>Loading...</CommandItem>
              ))
              }

           
            </CommandGroup>
            
        </CommandList>
        </Command>

    </div>
  )
}

export default CategoryList