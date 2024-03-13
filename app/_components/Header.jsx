"use client";
import React, { useEffect } from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button";
import Link from 'next/link'
import {RegisterLink, LoginLink, LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"

  
function Header() {
    const Menu=[
        {
            id:1,
            name: "Home",
            link: "/",
        },
        {
            id:2,
            name: "Explore",
            link: "/explore",
        },
        {
            id:3,
            name: "Contact Us",
            link: "/Contact",
        },
    

    ]

    const {user,logout}=useKindeBrowserClient();
    useEffect(() => {
        console.log(user)
    }
    , [user])

  return (
    <div>
        <div className='flex items-center justify-between p-4 shadow-sm'>
            <div className='flex items-center gap-10'>
                <Image src="/logo.svg" alt="logo" width={180} height={80} />
                
                <ul className='md:flex gap-8  hidden'>
                    {Menu.map((item,index)=>(
                        <Link href={item.link} key={index}>
                            <li className='hover:text-primary cursor-pointer hover:scale-105 transition-all ease-in-out' key={item.id} >{item.name}</li>
                        </Link>
                    ))}
                </ul>
            </div>
            {
                user?   
                <Popover>
                    <PopoverTrigger> 
                        <Image src={user?.picture} alt='profile image' height={50} width={50} className='rounded-full'/>

                    </PopoverTrigger>
                    <PopoverContent className="w-44">
                        <ul  className='flex flex-col gap-2'>
                         
                            <Link href={'/my-booking'} className='cursor-pointer  hover:bg-slate-100 p-2 round-md'>My Booking </Link>
                            <li className='cursor-pointer  hover:bg-slate-100 p-2 round-md'> <LogoutLink>Log out</LogoutLink> </li>
                        </ul>
                    </PopoverContent>
                </Popover>

                // <LogoutLink><Button variant='outline'>Log out</Button> </LogoutLink>

                :
                <LoginLink>
                    <Button>Get Started</Button>    
                </LoginLink>
            }

        </div>
    </div>
  )
}

export default Header;