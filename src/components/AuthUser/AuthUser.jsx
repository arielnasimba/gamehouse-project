"use client"

import Image from "next/image";
import React, { useState } from "react";
import logos from "../../images-dir/logoImages";
import Link from "next/link";

export default function AuthUser() {

    const [nameUser, setNameUser] = useState({
      name: "",
      pwd : 0
    });

    const getUserData =() => {
      setNameUser( prevData => prevDat)
      setPwdUser(document.querySelector("#userPwd").value)
    }
  return (
    <div
      className={`w-[24rem] h-[52rem]  mx-auto mb-10 flex flex-col justify-end gap-8 `}
    >
      <div className={`btn_area w-full   h-[22%] flex `} >
        <Image
          alt={logos[2].name}
          src={logos[2].src}
          className="w-[70%] rounded-3xl m-auto"
        />
      </div>

      <div className={`title_area w-full h-[10%] text-center self-start  `}>
        <h1 className={`text-[2rem] font-semibold `}>GameHouse</h1>
        <p className={`text-[0.9rem]`}> Join the gaming community now!</p>
      </div>

      <div
        className={`input_user_area w-full font-medium  h-[24%] flex flex-col gap-2  `}
      > 
        
        <p>Username *</p>
        <input
        // onChange={}
        type="text" name=""  id="userName" className="w-full h-[28%] rounded-3xl placeholder:pl-5 " placeholder="Enter your username" />
        
        <p>Password *</p>
        <input type="password" name=""  id="userPwd" className="w-full h-[28%] rounded-3xl placeholder:pl-5" placeholder="***********"/>

      </div>
      <div
        className={`btn_play_area w-full font-semibold  h-[7.477%]  text-center`}
      >
        <Link onClick={() => getUserData()}
        href={`/main-page/${'cds'}`} className={`w-full h-full flex bg-black rounded-3xl`}>
          <p className="m-auto text-white">Play</p>
        </Link>
      </div>
      <div
        className={`btn_signin_ready_area w-full h-[8%] bg--700 text-center `}
      >
        <ul className={`w-full h-full  font-semibold flex  justify-between `}>
          <Link href={``} className={`w-1/2 h-full flex  rounded-3xl`}>
            <p className="m-auto ">New to GameHouse?</p>
          </Link>
          <Link href={`/sign-in`} className={`w-1/2 h-full flex  rounded-3xl`}
          >
            <p className="m-auto">Register</p>
          </Link>
        </ul>
      </div>
    </div>
  );
}
