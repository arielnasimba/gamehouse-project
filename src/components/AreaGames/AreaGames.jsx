"use client"

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {addCategories} from "../../redux/slices/librarySlice"
import axios from 'axios';
import { fetchContent } from '../../redux/slices/contentSlice';
import Card from "../../components/Card/Card"

import ServerComponent from "../ServerComponent/ServerComponent"


export  const AreaGames = ( {children} ) =>{

  // const [dataGames, setDataGames] = useState([]);

console.log('chsqbc');

    // const dispatch = useDispatch();
    const lib = useSelector(state => state.DB.database)
    // console.log(lib);
    // console.log('cdbhbsi');

    // useEffect(() => {
    //   dispatch(fetchContent())
    // }, [dispatch])

    // const contents = useSelector(state => state.content.contents);
    // console.log(contents);
    // const isLoading = useSelector((state) => state.content.isLoading);
    // const error = useSelector((state) => state.content.error);

  //   // const lib =  useSelector(state => state.library )
  //   // console.log(lib);
    // if (isLoading) {
    //     return 'is loading ...'
    // }
    // if (error) {
    //     return error
    // }
    
  return (
    <div className={`area-game w-full h-full grid grid-cols-2 gap-2 overflow-y-scroll bg-slate-500
                          tablet:grid-cols-4 tablet:gap-1
                          desktopM:grid-cols-5
                          desktopL:grid-cols-6 
    `}>
      {/* <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/> */}
      {
        lib
      }
      helloo i m client compornenrt
{/* {
         
          contents.map((el) => {
            return(
              <div className="w-[2rem] h-[5rem] bg-blue-700">
    

                <h2> {el.title} </h2>
              </div>
            )
          })
        }   */}

        {/* { JSON.stringify(dataGames)} */}


        {/* <ServerComponent /> */}
        {/* <ServerComponent/> */}
        
        {children}

    </div>
  )
}

export default AreaGames;