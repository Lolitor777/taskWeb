import { Field } from 'formik';
import { FormLayout } from '../layout/FormLayout';
import { Link } from 'react-router-dom';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useState } from 'react';

export const RegisterPage = () => {

  const [showPass, setShowPass] = useState( false );
  

  return (
    <FormLayout inputValues={{ name: '', email: '', password: '' }} title='Registro' textButton="Regístrate">
      <Field name="name" type="text" className="border border-[#aeaaaa] rounded-md px-[.5em] py-[.3em] outline-none w-[90%] max-w-[350px]" placeholder="Nombre"  />
      <Field name="email" type="email" className="border border-[#aeaaaa] rounded-md px-[.5em] py-[.3em] outline-none w-[90%] max-w-[350px]" placeholder="Correo electrónico"/>
      
      <div className='relative w-[90%] max-w-[350px]'>
        <Field name="password" type={`${showPass ? 'text' : 'password'}`} className="border border-[#aeaaaa] rounded-md px-[.5em] py-[.3em] outline-none w-[100%] max-w-[350px]" placeholder="Contraseña"/>
        
        {
          showPass 
          ? <FaEyeSlash className='absolute z-10 right-2 top-[50%] translate-y-[-50%] text-gray-500 text-[1.3rem] cursor-pointer md:hover:text-gray-800' onClick={ () => setShowPass( false ) }/>
          : <FaEye className='absolute z-10 right-2 top-[50%] translate-y-[-50%] text-gray-500 text-[1.3rem] cursor-pointer md:hover:text-gray-800' onClick={ () => setShowPass( true) }/>
        }
      </div>

      <Link to='/auth/login' className='text-blueThird active:text-bluePrimary lg:hover:text-bluePrimary transition-all lg:text-[1rem] font-semibold text-[.8em] mt-[1em]'>¿Ya tienes una cuenta? inicia sesión.</Link>
      
      <button type="submit" className="bg-orangePrimary active:bg-oarangeSecondary active:text-bluePrimary lg:hover:bg-oarangeSecondary lg:hover:text-bluePrimary transition-all px-4 py-1 shadow-md rounded-lg font-semibold text-white">Regístrate</button>
    </FormLayout>
  )
}
