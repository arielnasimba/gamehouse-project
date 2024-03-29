"use client";

import Image from "next/image";
import React, {useState } from "react";
import "./styles.css";
import Navbar from "../../../components/Navbar/Navbar";
import SideBar from "../../../components/SideBar/SideBar";
import AreaGames from "../../../components/AreaGames/AreaGames";
import Footer from "../../../components/Footer/Footer";
// import apiRender from "../../../components/apiRender/apiRender";

export default function MainPageUser({
  params,
}: {
  params: {
    user: string;
  };
}) {

  const [displaySideBar, setDisplaySideBar] = useState(false);
    const handleSideBar=() => {
      setDisplaySideBar(!displaySideBar);

      let test = document.querySelector(".main-user-id") as HTMLElement;
      if (displaySideBar) {
        
        test.style.width= `100dvw`;
      } else if (!displaySideBar){
        test.style.width= `100dvw`;
        // test.style.padding= `2rem`;

      }
      // console.log(test);

      
      // document.querySelector(".main-user-id").style.width = `90%`;
    }
  return (

    <div
      className={`w-[100dvw] min-h-[100dvh] flex flex-col 
                      
    `}
    >
      
      <header className={`w-full h-[9dvh] `}>
        <Navbar displaySideBar={handleSideBar} />
      </header>

      <div className={`container-main-aside h-[100dvh]  w-full  flex bg-blue-600 overflow-y-scroll `}>

        { displaySideBar ? <SideBar/> : "" }
        
        <main className={`main-user-id h-[110dvh]   w-[100%] px-2 pt-5`}>
          {/* <Suspense fallback={ <p> loading areagecnds</p>  }> */}


          <AreaGames/>
          {/* </Suspense> */}
        </main>

      </div>
        <Footer/>
    </div>
  );
}
