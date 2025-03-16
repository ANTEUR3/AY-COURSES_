import React, { Component, ReactNode } from "react";
import logo from "../../../public/Logo.png";
import { StaticImageData } from "next/image";
import Image from "next/image";
import Link from "next/link";
type Props = {
  children: ReactNode;
};
export type featureProps = {
  id: number;
  title: string;
  Description: string;
  image: StaticImageData | string;
  url: string;
  urlName:string
};

const Features = ({ children }: Props) => {
  return (
    <div className="w-full px-[20%] lg:pb-5">
      <div className="w-full flex justify-center items-center gap-x-3 pb-4">
        <Image src={logo} alt="" className="w-[80px]  " />
        <h1 className="text-4xl font-bold text-gray-800  ">
          Features in <span className="text-green-600"> AY-SCHOOL</span>
        </h1>
      </div>
      <div className="w-full grid grid-cols-3 gap-5 ">{children}</div>
    </div>
  );
};

export default Features;

export const FeaturesCard = ({ feature }: { feature: featureProps }) => {
  return (
    <div className=" lg:pt-[8px] border border-gray-200 shadow-3xl  lg:px-[20px] rounded-lg relative lg:pb-[60px] lg:mb-5">
      <Image
        src={feature.image}
        alt=""
        className="w-full lg:h-[180px] rounded-xl pb-2 "
      />
      <div className="w-full flex justify-start items-center  pb-3">
        <Image
          src={logo}
          alt=""
          className="w-[50px] border  -translate-x-[10px]"
        />
        <h1 className="font-bold ">{feature.title}</h1>
      </div>
      <p className="text-gray-600 lg:mb-[10px]">{feature.Description}</p>
      <div className="w-full flex justify-center items-center">
      <Link href={feature.url} className="hover:-translate-x-[30px] transition-all duration-500  absolute flex justify-start items-center bottom-3 lg:pr-[30px]  text-green-600 font-semibold lg:text-xl rounded-lg border border-gray-500">
          <Image src={logo} alt="" className="w-[50px]" />
          {feature.urlName}
      </Link>
      </div>
      
    </div>
  );
};
