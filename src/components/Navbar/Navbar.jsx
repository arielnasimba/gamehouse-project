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
                    desktopL:w-[4%]
            `}>
                <Bars3CenterLeftIcon className={`w-full m-auto text-white`} />
                 </li>

            <Link
            
            href={`/main-page`}
            className={`w-[20%] h-full  flex
                tablet:w-[14%]
                desktopM:w-[12%]
                desktopL:w-[9%]
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
                             
                            tablet:w-[28%] tablet:h-[66%] tablet:bg-green-400
                            tablet:rounded-3xl my-auto
            `}
            >
                
                <input type="text" name="" id="gameSearched"  className={` hidden 
                                                        tablet:flex tablet:w-full tablet:rounded-3xl tablet:bg-transparent
                                                        tablet:
                                                        tablet:pl-5

                                                        `} placeholder='Search a game... '/>
                <MagnifyingGlassIcon className={`w-full text-white  
                                                tablet:absolute  tablet:top-[1.9rem] tablet:w-[1.5rem] tablet:left-[27.3rem]
                                                desktopM:left-[38.5rem]
                                                desktopL:left-[55rem]
                                                `} /> 
                </li>
            <li className={`w-[6%] h-full  flex
                            tablet:w-[4%] 
                            desktopM:w-[3%] desktopM:ml-8
                            desktopL:w-[2%] desktopL:ml-24
            `}
            ><HeartIcon className={`w-full text-white `} /> </li>
            <li className={`w-[6%] h-full  flex
                            tablet:w-[4%]   tablet:-ml-8 tablet:-mr-8 
                            desktopM:w-[3%] desktopM:-ml-20 desktopM:-mr-20
                            desktopL:w-[2%] desktopL:-ml-36 desktopL:-mr-36
            `}
            ><ShoppingBagIcon className={`w-full text-white`} /> </li>

            <Link
            href={`/user-login`}
            className={`w-[30%] h-full  flex
                 tablet:w-[14%]
                    desktopM:w-[11%]
                    desktopL:w-[8%]
            `}
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