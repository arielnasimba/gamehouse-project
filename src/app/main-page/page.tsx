"use client";
import Image from "next/image";
import "./styles.css";
import Navbar from "../../components/Navbar/Navbar";
import SideBar from "../../components/SideBar/SideBar";
import AreaGames from "../../components/AreaGames/AreaGames";
import React, {useState } from "react";
// import apiPage from "../../app/apiPage/page"

export default function MainPage() {
  const [displaySideBar, setDisplaySideBar] = useState(false);
  const handleSideBar=() => {
    setDisplaySideBar(!displaySideBar);
  }
  return (
  

    <body
      className={`w-[100dvw] min-h-[100dvh] flex flex-col 
                      
    `}
    >
      
      <header className={`w-full h-[9dvh] `}>
        <Navbar displaySideBar={handleSideBar} />
      </header>

      <div className={`container-main-aside h-[90dvh]  w-full  flex`}>

        { displaySideBar ? <SideBar/> : "" }
        
        <main className={`h-[90dvh]  w-[100%] p-2`}>
          {/* <Suspense fallback={ <p> loading areagecnds</p>  }> */}

          {/* { apiPage} */}
          {/* <AreaGames/> */}
          {/* </Suspense> */}
        </main>
      </div>
    </body>
  );
}
