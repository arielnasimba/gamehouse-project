"use client";

import Image from "next/image";
import React from "react";
import "./styles.css";
import  Navbar from "../../../components/Navbar/Navbar"

export default function MainPageUser( {
  params,
}: {
  params: {
    user: string
  }
}) {
  return (

    <body  className={`w-[100dvw] min-h-[100dvh] flex flex-col 
                      
    `}
    >

      <header className={`w-full h-[9dvh] `}

>
        <Navbar  />

      </header>
    <main 
    >

    {params.user}
    </main>
        
    </body>
  );
}
