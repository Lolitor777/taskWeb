import { Form, Formik } from "formik"
import { Children, cloneElement } from "react";
import * as Yup from 'yup';
import logo from '../../../assets/logo-taskWeb.svg'
import { CiCircleInfo } from "react-icons/ci";


const FormSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Demasiado corto!'),
  password: Yup.string()
    .min(8, 'La contraseña debe contar con un mínimo de 8 carácteres.'),
  email: Yup.string().email('El correo electrónico es inválido.'),
});

export const FormLayout = ({ children, inputValues = {}, title, }) => {


  return (
    <section className='bg-gradient-to-bl from-bluePrimary relative to-blueThird w-full h-[100vh] flex flex-col justify-center items-center'>

      <h2 className="absolute top-[.5em] text-white font-bold text-[2rem] lg:text-[3rem] animate__animated animate__fadeIn">TaskWeb</h2>

      <Formik
        initialValues={inputValues}
        validationSchema={FormSchema}
        onSubmit={values => console.log(values)}
      >
        {({ errors, touched }) => (
          <>
            <Form className="bg-white p-[1em] relative rounded-lg w-[90%] flex flex-col items-center justify-center gap-[.6em] max-w-[400px]">

              <figure className="rounded-full p-[.5em] bg-blueThird border-white border-[3px] absolute top-[-40px] w-[80px] h-[80px] ">
                <img src={logo} alt="Logo taskWeb" className="object-center mx-auto object-cover w-[40px]" />
              </figure>

              <h2 className="text-bluePrimary font-bold text-[1.5rem] lg:text-[2rem] mb-[.8em] mt-[1.5em]">{title}</h2>

              {
                Children.map(children, child => cloneElement(child, { errors, touched }))
              }

            </Form>
            
            {
              Object.keys( errors ).length === 0 
              ? null 
              : <div className="bg-red-300 text-red-700 font-semibold w-[90%] rounded-md mt-1 px-[1em] py-[.5em] flex flex-col gap-2 max-w-[400px]">
                {
                  errors.name && <div className="flex items-center gap-2"><CiCircleInfo className="flex-[10%] text-[1.4rem]"/> <p className="text-[.8rem] flex-[90%]">{ errors.name }</p></div> 
                }
                {
                  errors.email && <div className="flex items-center gap-2"><CiCircleInfo className="flex-[10%] text-[1.4rem]"/> <p className="text-[.8rem] flex-[90%]">{ errors.email }</p></div> 
                }
                {
                  errors.password && <div className="flex items-center gap-2"><CiCircleInfo className="flex-[10%] text-[1.4rem]"/> <p className="text-[.8rem] flex-[90%]">{ errors.password }</p></div> 
                }
              </div>
            }   
          </>
        )}

      </Formik>
    </section>
  )
}
