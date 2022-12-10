import React from "react";
import { AiFillGithub} from "react-icons/ai";

function Block(data) {
   return (
      <div className="m-4 p-1 flex flex-col items-center bg-mBlack text-mWhite w-[65vh] rounded-md border-[1px] border-mBlack">
         <img className="w-[100%] h-[200px] object-cover rounded-sm " src={data.img} /> 
         <h4 className="text-xl font-semibold p-1 text-center"> {data.name}</h4>
         <p className="text-sm italic text-center mx-2 mb-2"> {data.description}</p>
         <div className="flex flex-wrap justify-center items-center w-auto mb-2">
            <a href={data.url} target='_blank' className="flex justify-center items-center text-center bg-mPurple m-2 px-2 py-1 rounded-2xl hover:bg-mBlue duration-300"> Repositorio de github <AiFillGithub className="ml-2"/> </a>
          <div>
             {data.dep === null ? '' :
             <a href={data.dep} target='_blank' className="flex justify-center items-center text-center bg-mPurple m-2 px-3 py-1 rounded-2xl hover:bg-mBlue duration-300"> Ver proyecto online! </a>
             }
          </div>  
         </div>
           
      </div>
   );
}

export default Block;
