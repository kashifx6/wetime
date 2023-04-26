import React from "react";
import Image from "next/image";
import Link from "next/link";

const Card = (props) => {
  return (
    <div className="mx-[10px] my-[10px]  md:w-[300px] bg-[#3f3d61] rounded-2xl shadow-2xl dark:bg-white dark:bg-opacity-20">
      <Link href={`/gameinfo/${props.slug}`}>
        <Image
          className="rounded-t-lg mb-[23px]"
          src="/assets/images/couple.png"
          alt=""
          width={300}
          height={150}
          layout="responsive"
        />
      </Link>
      <div className="p-5">
        <Link href={`/gameinfo/${props.slug}`}>
          <h5 className="text-center text-lg font-bold mb-[16px] text-white dark:text-[#F5F5F5]">
            {props.title}
          </h5>
        </Link>
        <p className="text-sm text-center mb-[16px] font-normal text-white dark:text-[#F5F5F5]">
          {props.description}
        </p>
        <div className="flex justify-center">
          <Link
            href={`/gameinfo/${props.slug}`}
            className="inline-flex items-center font-semibold  py-2 pl-3 pr-4 text-white bg-[#120F49] text-base rounded-3xl  text-center  px-5 py-2.5 mr-2 mb-2 dark:bg-white dark:bg-opacity-20 focus:outline-none dark:text-[#F5F5F5] shadow-2xl "
          >
            <Image
              className="w-4 h-4 ml-2 mr-2"
              src="assets/images/svg/playbtn.svg"
              alt="playbtn"
              width={4}
              height={4}
            />
            PLAY NOW
          </Link>
        </div>
      </div>
    </div>
  );
};


export default Card;

