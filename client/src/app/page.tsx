import Image from "next/image";
import NavBar from "./components/navBar";
import TopHomePart from "./components/topHomePart";
import Roadmap from "./components/Roadmap";
import {Learn  , Exams ,Apply,Competition } from "./components/Roadmap";

export default function Home() {
  return (
    <div className=" ">
        <TopHomePart />
        <Roadmap>
           <Learn />
           <Exams />
           <Apply />
           <Competition />
        </Roadmap>
        
    </div>
  );
}
