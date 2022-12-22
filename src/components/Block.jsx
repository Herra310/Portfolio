import React from "react";
import { AiFillGithub} from "react-icons/ai";

function Block(data) {
   return (
      <div className="m-4 p-1 mx-auto max-w-[90%] flex flex-col items-center bg-mBlack text-mWhite rounded-md border-[1px] border-mBlack">
         <img className="w-[100%] min-h-[260px] object-cover rounded-sm " src={data.img} /> 
         <h4 className="text-xl mt-1 font-semibold p-2 text-center border-b-2 border-mWhite"> {data.name}</h4>
         <p className="text-sm italic text-center mx-2 mt-3"> {data.description}</p>
         <div className="flex flex-wrap justify-center items-center w-auto min-h-[100px] mb-2">
            <a href={data.url} target='_blank' className="flex justify-center text-sm items-center text-center bg-mPurple m-2 px-3 py-2 rounded-2xl hover:bg-mBlue duration-300"> Repositorio de github <AiFillGithub className="ml-2"/> </a>
          <div>
             {data.dep === null ? '' :
             <a href={data.dep} target='_blank' className="flex justify-center text-sm items-center text-center bg-mPurple m-2 px-3 py-2 rounded-2xl hover:bg-mBlue duration-300"> Ver proyecto online! </a>
             }
          </div>  
         </div>
           
      </div>
   );
}

export default Block;
