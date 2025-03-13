"use client"

import Image from "next/image";
import NavBar from "./components/navBar";
import TopHomePart from "./components/topHomePart";
import Roadmap from "./components/Roadmap";
import {Learn  , Exams ,Apply,Competition } from "./components/Roadmap";
import Features  from "./components/Features";
import { useMemo } from "react";
import { features } from "./Data";
import { FeaturesCard } from "./components/Features";

export default function Home() {

 

  const displayCards=useMemo(()=>{
    return features.map((feature,key)=>{
          return <FeaturesCard feature={feature} key={feature.id}/>
    })
  },[features])
  return (
    <div className=" ">
        <TopHomePart />
        <Roadmap>
           <Learn />
           <Exams />
           <Apply />
           <Competition />
        </Roadmap>
        <Features>
          {displayCards}
        </Features>
        
    </div>
  );
}
