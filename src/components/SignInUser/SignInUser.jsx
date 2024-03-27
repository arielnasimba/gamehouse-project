import Image from "next/image";
import React from "react";
import logos from "../../images-dir/logoImages";
import Link from "next/link";

export default function SignInUser() {
  return (
    <div
      className={`w-[24rem] h-[52rem]  mx-auto mb-10 flex flex-col justify-end gap-8  `}
    >
      <div className={`btn_area w-full   h-[22%] flex `}>
        <Image
          alt={logos[3].name}
          src={logos[3].src}
          className="w-[70%] rounded-3xl m-auto"
        />
      </div>

      <div className={`title_area w-full h-[10%] text-center self-start  `}>
        <h1 className={`text-[2rem] font-semibold `}>GameHouse</h1>
        <p className={`text-[0.9rem]`}> Register now and dive into the gaming community!</p>
      </div>

      <div
        className={`input_user_area w-full font-medium  h-[45.15%]   flex flex-col gap-2  `}
      > 
        
        <p>Username *</p>
        <input type="text" name="" id="userName" className="w-full h-[28%] rounded-3xl placeholder:pl-5 " placeholder="Enter your username" />
        
        <p>User mail *</p>
        <input type="email" name="" id="userName" className="w-full h-[28%] rounded-3xl placeholder:pl-5 " placeholder="Enter your email" />
         
        
         
        <p>Password *</p>
        <input type="password" name="" id="userPwd" className="w-full h-[28%] rounded-3xl placeholder:pl-5" placeholder="***********"/>

        <p>Confirm Password *</p>
        <input type="password" name="" id="userPwd" className="w-full h-[28%] rounded-3xl placeholder:pl-5" placeholder="***********"/>

      </div>
      <div
        className={`btn_play_area w-full font-semibold  h-[7.477%]  text-center`}
      >
        <Link href={`/`} className={`w-full h-full flex bg-black rounded-3xl`}>
          <p className="m-auto text-white">Register</p>
        </Link>
      </div>
 
    </div>
  );
}
