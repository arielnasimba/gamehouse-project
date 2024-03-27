import Image from "next/image";
import React from "react";
import SignInUser from "../../../components/SignInUser/SignInUser"
import icons from "../../../images-dir/btnIcon";
import "./styles.css"
import Link from "next/link";
export default function SignIn() {
  return (
    <main className={`w-[100dvw] h-[100dvh] flex flex-col justify-end
                      
    `}
    > 
    <Link
    href={`/`}
    >
    
      <button type="button" className={` w-[2rem] h-[2rem]  absolute top-10 left-6 flex`}>
        <Image
        alt={icons[0].name}
        src={icons[0].src}
        />
      </button>
      </Link>

      <SignInUser/>
    </main>
  );
}
