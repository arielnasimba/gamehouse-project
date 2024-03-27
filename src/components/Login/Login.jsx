import Image from "next/image";
import React from "react";
import logos from "../../images-dir/logoImages";
import Link from "next/link";

export default function Login() {
  return (
    <div
      className={`w-[24rem] h-[48rem]  mx-auto mb-10 flex flex-col justify-end gap-10 `}
    >
      <div className={`btn_area w-full  h-[17%]  flex `}>
        <Image
          alt={logos[1].name}
          src={logos[1].src}
          className=" object-contain"
        />
      </div>

      <div className={`title_area w-full h-[15%] text-center self-start my-10`}>
        <h1 className={`text-[2rem] font-semibold `}>
          Welcome to GameHouse & start gaming now
        </h1>
        <p className={`text-[0.9rem]`}>Discover and play the best games here</p>
      </div>
      <div className={`btn_play_explore_area w-full h-[18%]  text-center`}>
        <ul
          className={`w-full h-full font-semibold flex flex-col justify-between `}
        >
          <Link
            href={`/user-login`}
            className={`w-full h-[45%] flex bg-black rounded-3xl`}
          >
            <p className="m-auto text-white">Play</p>
          </Link>
          <Link
            href={``}
            className={`w-full h-[45%] flex bg-white rounded-3xl`}
          >
            <p className="m-auto">Explore</p>
          </Link>
        </ul>
      </div>
      <div className={`btn_signin_ready_area w-full h-[8%] bg--700 text-center`}>
        <ul
          className={`w-full h-full  font-semibold flex  justify-between `}
        >
          <Link
            href={``}
            className={`w-1/2 h-full flex  rounded-3xl`}
          >
            <p className="m-auto ">Ready to play?</p>
          </Link>
          <Link
            href={``}
            className={`w-1/2 h-full flex  rounded-3xl`}
          >
            <p className="m-auto">Sign in</p>
          </Link>
        </ul>
      </div>
    </div>
  );
}
