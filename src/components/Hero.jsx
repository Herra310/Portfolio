import React from "react";
import Heroimg from "../assets/Heroimg.jpg";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";


function Hero() {
   const ghUrl='https://github.com/Herra310';
   const lnUrl='https://www.linkedin.com/in/jorge-arath-herrera-romero-146013214/';
   return (
      <div id="Hero" className="Hero flex flex-wrap items-center justify-evenly h-[100%] my-[8rem]">
         <div className="info max-w-[28rem] m-5">
            <h1 className="text-mPurple text-center text-5xl mb-5 hover:text-mBlue duration-500 font-bold ">
               Desarrollador Web.
            </h1>
            <p className="text-md text-[#2f2f2f] font-normal italic text-center">
               Soy un estudiante de ing. en sistemas computacionales con un gusto por el
               desarrollo web, que busca constante aprendizaje y usar su
               creatividad para poder resolver problemas.
            </p>
            <div className="flex items-center justify-center mt-6">
               <a download href='../Jorge_Herrera_CV2022.pdf' className="mr-4 font-semibold text-mWhite bg-mPurple  hover:bg-mBlue duration-500 rounded-xl px-6 py-1">
                  Descarga mi CV
               </a>
               <a href={ghUrl} target='_blank'> <AiFillGithub className="bg-mPurple rounded-2xl w-[32px] h-[32px] m-2 p-1 text-mWhite hover:bg-mBlue duration-500"/> </a>
               <a href={lnUrl} target='_blank'> <AiFillLinkedin className="bg-mPurple rounded-2xl w-[32px] h-[32px] m-2 p-1 text-mWhite hover:bg-mBlue duration-500"/> </a>
            </div>
         </div>

         <div className="image m-6">
            <img className="max-w-sm" src={Heroimg} alt="" />
            <p className="text-[10px] text-[#717171] mr-3 text-right">
               <a href="https://www.freepik.com/free-vector/developer-activity-concept-illustration_7401752.htm#query=front%20end%20developer&position=2&from_view=keyword">
                  Image by storyset
               </a>
               on Freepik
            </p>
         </div>
      </div>
   );
}

export default Hero;
