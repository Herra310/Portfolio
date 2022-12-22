import React, { useState } from "react";
import { p } from "../data/proyects";
import Block from "./Block";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Proyects() {
   const Blocks = p.map((data) => (
      <Block
         key={data.id}
         name={data.name}
         img={data.img}
         description={data.description}
         url={data.repo}
         dep={data.deploy}
      />
   ));

   //
   return (
      <div id="Proyects" className="flex flex-col justify-center items-center my-4 h-[100%]">
         <h2 className="text-mBlack text-2xl font-bold mb-3 py-3 px-6 border-b-2 border-mPurple hover:border-mBlue duration-300 text-center">
            Algunos de mis proyectos:
         </h2>
            <Carousel className="max-w-[40%]"
               showStatus={false}
               infiniteLoop={true}
               autoPlay={true}
               stopOnHover={true}
               centerSlidePercentage={100}
               swipeable={true}
               showIndicators={false}
               emulateTouch={true}
               showThumbs={false}
               useKeyboardArrows={true}
               centerMode={true}
            >
               {Blocks}
            </Carousel>
         <h3 className="text-mBlack text-md font-bold m-5 py-2 px-6 border-b-2 border-mPurple hover:border-mBlue duration-300 text-center">
            Siéntete libre de ver el codigo de otros proyectos en mi perfil de Github!
         </h3>
      </div>
   );
}

export default Proyects;
