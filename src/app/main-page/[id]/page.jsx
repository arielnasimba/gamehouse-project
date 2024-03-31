"use client";

import Image from "next/image";
import React, {Suspense, useState } from "react";
import "./styles.css";
import Navbar from "../../../components/Navbar/Navbar";
import SideBar from "../../../components/SideBar/SideBar";
import AreaGames from "../../../components/AreaGames/AreaGames";
import Footer from "../../../components/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
// import apiRender from "../../../components/apiRender/apiRender";
import ServerComponent from "../../../components/ServerComponent/ServerComponent"

export default function MainPageUser({}) {

  const [displaySideBar, setDisplaySideBar] = useState(false);
    const handleSideBar=() => {
      setDisplaySideBar(!displaySideBar);

      // let test = document.querySelector(".main-user-id") as HTMLElement;
      if (displaySideBar) {
        
        test.style.width= `100dvw`;
      } else if (!displaySideBar){
        test.style.width= `100dvw`;
        // test.style.padding= `2rem`;

      }
      // console.log(test);

      
      // document.querySelector(".main-user-id").style.width = `90%`;
    }

    // const dispatch = useDispatch();
    // // const lib = useSelector(state => state.DB.database)
    // // console.log(lib);
    // console.log('cdbhbsi');
  return (

    <div
      className={`w-[100dvw] min-h-[100dvh] flex flex-col 
                      
    `}
    >
      
      <header className={`w-full h-[9dvh] `}>
        {/* <Navbar displaySideBar={handleSideBar} /> */}
      </header>

      <div className={`container-main-aside h-[100dvh]  w-full  flex overflow-y-scroll `}>

        {/* { displaySideBar ? <SideBar/> : "" } */}
        
        <main className={`main-user-id h-[110dvh]   w-[100%] px-2 pt-5`}>
          {/* <Suspense fallback={ <p> loading areagecnds</p>  }> */}



          {/* client component start  */}
            <AreaGames>
        <Suspense fallback={ <p> hello im Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi incidunt rem culpa, vel accusamus tenetur. Modi, voluptate beatae eligendi exercitationem asperiores, facilis vitae nemo porro doloribus ducimus sapiente commodi dolores.din</p> }>


          <ServerComponent/>
        </Suspense>

            </AreaGames>
          {/* client component end  */}


          {/* server component start  */}
          {/* server component end  */}

          {/* </Suspense> */}
        </main>

      </div>
        {/* <Footer/> */}
    </div>
  );
}
