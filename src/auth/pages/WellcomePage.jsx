import { Link } from 'react-router-dom';
import ola from '../../../assets/wave.png';
import wellcomeImage from '../../../assets/wellcome-image.svg';
import '../styleAuth.css';

export const WellcomePage = () => {


  return (
    <>
      <div className='wellcome-header-container'>
        <div className='wellcome-header-container-child'>
          <span>By Victor Carvajal</span>
          <h1 className='font-bold text-[2rem] text-sixth'>TaskWeb</h1>
        </div>
      </div>

      <div className='wellcome-body-container'>
        <div className='wellcome-body-container-child'>
          <h2>¡Organiza tu vida con facilidad!</h2>

          <p>
            Esta plataforma te ayuda a gestionar tus tareas de manera eficiente para que puedas centrarte en lo que realmente importa.
            Crea, categoriza y completa tus tareas de forma sencilla y rápida.
          </p>

          <div className='wellcome-body-container-buttons'>
            <Link className='wellcome-body-btn wellcome-body-btn-register flex justify-center items-center lg:hover:bg-[#2f73e0]' to={'/auth/register'}>Empieza ahora</Link>
            <Link className='wellcome-body-btn wellcome-body-btn-login flex justify-center items-center lg:hover:bg-[#2f73e0]' to={'/auth/login'}>¿Ya tienes una cuenta? Inicia sesión</Link>
          </div>
        </div>

        <figure className='wellcome-body-wave-image'>
            <img src={ola} alt="ola de separación" className='wellcome-body-wave-img' />
        </figure>
      </div>

      <figure className='wellcome-body-task-image'>
          <img src={ wellcomeImage } alt="Imagen ilustrativa de tareas" className='wellcome-body-task-img'/>
      </figure>
    </>
  )
}
