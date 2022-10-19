import React, {useState} from "react";
import { AiFillCode, AiOutlineMenu } from "react-icons/ai";

function Nav() {
   const [isOpen, setIsOpen] = useState(false);

   const handleMenu= () => {
      setIsOpen(!isOpen)
   };

   const scrollTo = (id) => {
		const element = document.getElementById(id);
		element.scrollIntoView({
			behavior: 'smooth',
		});
	};

   return (
         <div className="Nav fixed w-[100%] z-[100] text-mWhite bg-[#181818]">
            <div className="flex items-center justify-between px-[3.5rem] py-[0.9rem]">
            <div className="Logo flex items-center">
               <AiFillCode className="mr-2"/> [ Jorge A. Herrera ]
            </div>
            <button onClick={handleMenu} className="p-2 md:hidden rounded hover:bg-mPurple active:bg-mPurple duration-300">
               <AiOutlineMenu className="w-6 h-6"/>
            </button>
            <div className="menu hidden md:flex items-center justify-between w-auto ">
               <button onClick={() => scrollTo('Hero')} className="mx-3 rounded hover:bg-mPurple py-2 px-3 w-[90px] text-center duration-500 cursor-pointer"> Inicio </button>
               <button onClick={() => scrollTo('Stack')} className="mx-3 rounded hover:bg-mPurple py-2 px-3 w-[90px] text-center duration-500 cursor-pointer"> Stack </button>
               <button onClick={() => scrollTo('Proyects')} className="mx-3 rounded hover:bg-mPurple py-2 px-3 w-[90px] text-center duration-500 cursor-pointer"> Proyectos </button>
               <button onClick={() => scrollTo('Contact')} className="mx-3 rounded hover:bg-mPurple py-2 px-3 w-[120px] text-center duration-500 cursor-pointer"> Contactame </button>
            </div>
            </div>
            <div className={isOpen ? 'transition-all' : 'hidden transition-all'}>
            <div className="flex flex-col items-center pb-2 duration-200 ">
               <button onClick={() => scrollTo('Hero')} className="my-1 rounded hover:bg-mPurple py-2 px-3 w-[90px] text-center duration-500 cursor-pointer"> Inicio </button>
               <button onClick={() => scrollTo('Stack')} className="my-1 rounded hover:bg-mPurple py-2 px-3 w-[90px] text-center duration-500 cursor-pointer"> Stack </button>
               <button onClick={() => scrollTo('Proyects')} className="my-1 rounded hover:bg-mPurple py-2 px-3 w-[90px] text-center duration-500 cursor-pointer"> Proyectos </button>
               <button onClick={() => scrollTo('Contact')} className="my-1 rounded hover:bg-mPurple py-2 px-3 w-[120px] text-center duration-500 cursor-pointer"> Contactame </button>
            </div>
            </div>
         </div>
   );
}

export default Nav;