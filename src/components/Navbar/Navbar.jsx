import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logos from "../../images-dir/logoImages"
import { HeartIcon } from '@heroicons/react/24/outline'
import { ShoppingBagIcon } from '@heroicons/react/24/outline'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { Bars3CenterLeftIcon } from '@heroicons/react/24/outline'


export default function Navbar() {
  return (

    <nav className={`w-full h-full bg-blue-500 flex`}>
        <ul className={` w-[90%] h-[80%] flex  m-auto  justify-between`}>
            <li className={`w-[8%] h-full  flex 
                    tablet:w-[5%]
            `}>
                <Bars3CenterLeftIcon className={`w-full m-auto text-white`} />
                 </li>

            <Link
            
            href={`/main-page`}
            className={`w-[20%] h-full  flex
                tablet:w-[12%]
            `}
            >

            <li className='flex '>   
                <Image
                alt={logos[0].name}
                src={logos[0].src}  
                className={`m-auto w-full`}              
            />
                 </li>
            </Link>
            <li className={`w-[6%] h-full  flex
                            tablet:w-[4%]
            `}
            ><MagnifyingGlassIcon className={`w-full text-white`} /> </li>
            <li className={`w-[6%] h-full  flex
                            tablet:w-[4%]
            `}
            ><HeartIcon className={`w-full text-white`} /> </li>
            <li className={`w-[6%] h-full  flex
                            tablet:w-[4%]
            `}
            ><ShoppingBagIcon className={`w-full text-white`} /> </li>

            <Link
            href={`/user-login`}
            className={`w-[30%] h-full  flex`}
            >
            <li className='flex w-full h-full'>
                <button type="button" className='w-[6rem] h-[2.2rem] bg-slate-400 rounded-3xl m-auto'>

                Connexion

                </button>

            </li>
            </Link>
        </ul>

    </nav>
  )
}
