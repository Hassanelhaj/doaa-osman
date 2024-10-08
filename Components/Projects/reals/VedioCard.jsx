import Image from "next/image";
import Link from "next/link";
import icon from '../../../public/imgs/projects/reals/placeholder.jpg'

import React from "react";

const VedioCard = ({ data }) => {
  return (
    <Link target="_blank" href={`${data.link}`} 
      className="w-[260px] h-[260px] bg-white rounded-lg 
    shadow-[0_3px_10px_rgb(0,0,0,0.2)] relative group
       
    cursor-pointer hover:scale-105 transition-all
    flex flex-col justify-center items-center gap-2"
    >
      <section className="w-full h-full">
        <Image
          src={icon}
          alt="logo"
          className="w-full h-full object-fit "
        />
      </section>
      <section
        className=" bg-[#ffffffbd]  top-0 opacity-0 transition duration-500
      group-hover:opacity-100 text-gray-500 w-full h-full
      absolute "
      >
        <div className="flex flex-col justify-center items-center gap-2 mt-3">
          <h2 className="text-xl font-semibold  text-slate-800 capitalize">
            {data.title}
          </h2>
          <h2 className=" t text-gray-400 font-light text-sm capitalize">
            {/* {data.description} */}
          </h2>
        </div>
      </section>
    </Link>
  );
};

export default VedioCard;
