import Image from 'next/image'
import React from 'react'
import { HeartIcon } from "@heroicons/react/24/outline";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";


export default function Card() {
  return (
    <div className={`w-[11rem] h-[15rem]  mx-auto bg-[rgba(221,221,221,0.4)] border-white border flex flex-col rounded-3xl relative`}>

    <div className="image-area w-full h-[55%]  rounded-t-3xl">
        <Image
            alt={``}
            src={``}
        />
    </div>

    <HeartIcon 
    
    className={`absolute top-4 w-[1.5rem] right-4`}
    />
    <div className="text-area w-full h-[45%]  rounded-b-3xl flex flex-col p-2 justify-evenly">

        <div className="title-area mx-auto">
             <h2>title</h2>
        </div>
    
        {/* <div className="description-area mx-auto overflow-scroll">
             <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, architecto?</p>
        </div> */}

        <button type="button" className={`w-[30%] h-[2rem] mx-auto rounded-xl bg-[rgba(221,221,221,0.4)] border-white border flex`}>
            <ShoppingBagIcon
                className='w-[1.2rem] m-auto'
            />
        </button>
    </div>
    </div>
  )
}
