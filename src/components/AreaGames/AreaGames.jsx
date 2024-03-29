"use client"

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {addCategories} from "../../redux/slices/librarySlice"
import axios from 'axios';
import { fetchContent } from '../../redux/slices/contentSlice';
import Card from "../../components/Card/Card"


 function AreaGames (){

  // const [dataGames, setDataGames] = useState([]);

    // const dispatch = useDispatch();

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
    <div className={`area-game w-full h-full grid grid-cols-2 gap-2 overflow-y-scroll
                          tablet:grid-cols-4 tablet:gap-1
                          desktopM:grid-cols-5
                          desktopL:grid-cols-6 
    `}>
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
      <Card/>
      <Card/>
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

    </div>
  )
}

export default AreaGames;