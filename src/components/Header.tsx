"use client"
import Link from 'next/link'
import  React, { useState } from 'react'
import { Menu } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose
  
} from "@/components/ui/sheet"

export default function Header() {
  const [open, setOpen] = useState(false)
  return (
    <div className='flex justify-center'>
        <header className='w-full bg-gray-100 max-w-[1500px] flex md:flex-row justify-between items-center px-6'>
            <h1 className='text-yellow-500 text-2xl font-bold'>My <span className='text-black'>Portfolio</span></h1>
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger className='md:hidden p-3'>
                {open?<SheetClose/>:<Menu/>}
              </SheetTrigger>
              <SheetContent className='bg-white border-none'>
                                <ul className='uppercase pt-12 text-center px-3'>
                    <li className='p-3 border-b-2 border-b-yellow-500'><Link href={""}>About</Link></li>
                    <li className='p-3 border-b-2 border-b-yellow-500'><Link href={""}>Home</Link></li>
                    <li className='p-3 border-b-2 border-b-yellow-500'><Link href={""}>Projects</Link></li>
                    <li className='p-3 border-b-2 border-b-yellow-500'><Link href={""}>Contact</Link></li>
                </ul>
  
              </SheetContent>
            </Sheet>
                <ul className='hidden md:flex flex-row gap-5 font-medium'>
                    <li className='p-3 hover:text-yellow-500 text-lg transition-all'><Link href={""}>Home</Link></li>
                    <li className='p-3 hover:text-yellow-500 text-lg transition-all'><Link href={""}>About</Link></li>
                    <li className='p-3 hover:text-yellow-500 text-lg transition-all'><Link href={""}>Projects</Link></li>
                    <li className='p-3 hover:text-yellow-500 text-lg transition-all'><Link href={""}>Contact</Link></li>
                </ul>
  
    </header>
    </div>
  )
}



