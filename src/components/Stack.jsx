import React from "react";
import Card from "./Card";
import { datos } from '../data/Stack';
function Stack() {

   const Cards = datos.map((dato) =>
      <Card key={dato.id} name={dato.name} image={dato.image}/>
   );
   return (
      <div id="Stack" className="bg-mBlack h-[100%] pb-[80px] flex flex-col items-center">
        <h2 className="text-mWhite text-2xl font-bold py-3 px-6 border-b-2 border-mPurple hover:border-mBlue duration-300 text-center"> Mi stack:</h2>
         <div className="mt-6 mx-10 flex flex-wrap justify-center w-[75%]">
            {Cards}
         </div>
         
      </div>
   );
}

export default Stack;
