import React from 'react'

function Contact() {
  return (
    <div id='Contact' className='h-[100%]'>
        <h4 className='text-xl font-semibold text-center mb-6'>Contactame!👋</h4>
            <form className='flex flex-col w-[55%] h-[100%] mb-[50px] border-2 rounded-md border-mPurple hover:border-mBlue duration-300 py-5 m-auto' action="https://formsubmit.co/jorgehr99jhr@gmail.com" method="POST">
                <label className='uppercase font-semibold text-mBlack text-sm p-1 mx-3 mt-2'> Nombre: </label>
                <input required type="text" name='name' className='rounded-md border-[1px] border-[#e0e0e0] shadow-xl py-1 px-4 mx-4 focus:outline-none focus:shadow-outline focus:bg-[#e6e6e6]' />
                <label className='uppercase font-semibold text-mBlack text-sm p-1 mx-3 mt-5'> Correo electronico: </label>
                <input required type="email" name='email' className='rounded-md border-[1px] border-[#e0e0e0] shadow-xl py-1 px-4 mx-4 focus:outline-none focus:shadow-outline focus:bg-[#e6e6e6]' />
                <label className='uppercase font-semibold text-mBlack text-sm p-1 mx-3 mt-5'> Mensaje: </label>
                <textarea required name='message' className='rounded-md border-[1px] h-[10rem] border-[#e0e0e0] shadow-xl py-3 mx-4 px-4 resize-none focus:outline-none focus:shadow-outline focus:bg-[#e6e6e6]' />
                <button type='submit'  className='mx-auto mt-7 font-semibold text-mWhite bg-mPurple text-center w-[8rem] hover:bg-mBlue duration-500 rounded-xl px-10 py-1'> Enviar </button>
            </form>
    </div>
  )
}

export default Contact