import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { Field } from 'formik';
import { FormLayout } from "../layout/FormLayout";


export const LoginPage = () => {

  const [showPass, setShowPass] = useState( false );

  return (
    <FormLayout inputValues={{ email: '', password: '' }} title="Inicio de sesión" textButton="Login">
      <Field name="email" type="email" className="border border-[#aeaaaa] rounded-md px-[.5em] py-[.3em] outline-none w-[90%] max-w-[350px]" placeholder="Correo electrónico" />

      <div className='relative w-[90%] max-w-[350px]'>
        <Field name="password" type={`${showPass ? 'text' : 'password'}`} className="border border-[#aeaaaa] rounded-md px-[.5em] py-[.3em] outline-none w-[100%] max-w-[350px]" placeholder="Contraseña" />

        {
          showPass
            ? <FaEyeSlash className='absolute z-10 right-2 top-[50%] translate-y-[-50%] text-gray-500 text-[1.3rem] cursor-pointer md:hover:text-gray-800' onClick={() => setShowPass(false)} />
            : <FaEye className='absolute z-10 right-2 top-[50%] translate-y-[-50%] text-gray-500 text-[1.3rem] cursor-pointer md:hover:text-gray-800' onClick={() => setShowPass(true)} />
        }
      </div>

      <Link to='/auth/register' className='text-blueThird active:text-bluePrimary lg:hover:text-bluePrimary transition-all lg:text-[1rem] font-semibold text-[.8em] mt-[1em]'>¡Crea una cuenta!</Link>

      <div className='flex gap-2 w-[90%]'>
        <button type='button' className='flex-1 bg-orangePrimary active:bg-oarangeSecondary active:text-bluePrimary lg:hover:bg-oarangeSecondary lg:hover:text-bluePrimary transition-all py-1 shadow-md rounded-lg font-semibold text-white text-[.8rem] sm:text-[1rem]'>Inicia con Google</button>
        
        <button type="submit" className="flex-1 bg-orangePrimary active:bg-oarangeSecondary active:text-bluePrimary lg:hover:bg-oarangeSecondary lg:hover:text-bluePrimary transition-all py-1 shadow-md rounded-lg font-semibold text-white">Login</button>
      </div>

      
    </FormLayout>

  )
}
