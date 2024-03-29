"use client"
import Image from "next/image";
import React, { useEffect } from "react";
import Login from "../components/Login/Login"
import "./styles.css";

export default function Home() {


  return (
    <main className={`w-[100dvw] h-[100dvh] flex flex-col justify-end
                      
    `}
    >
      <Login/>
    </main>
  );
}
