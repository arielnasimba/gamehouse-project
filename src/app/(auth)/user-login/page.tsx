import Image from "next/image";
import React from "react";
import AuthUser from "../../../components/AuthUser/AuthUser"
import "./styles.css"
export default function UserLogin() {
  return (
    <main className={`w-[100dvw] h-[100dvh] flex flex-col justify-end
                      
    `}
    >
      <AuthUser/>
    </main>
  );
}
