/* eslint-disable react/no-unknown-property */

import { useEffect,useState } from 'react';
import Botonbl  from '../atomos/Botonbl'
import ModalInput from '../moleculas/ModalInput';
import Portal from '../../utils/Portal.jsX'
const Cuerpo = () =>{

const [isOpenModalRegister, setisOpenModalRegister] = useState(false);
const [tituloModalRegister, settituloModalRegister] = useState(false);

const clickpostular = (postulacion)=>
{
settituloModalRegister(postulacion)
  setisOpenModalRegister(true);
console.log(postulacion)

}

const ofertas =[ 
{cargo : 'Vendedor'},
{cargo : 'Pre Vendedor'},

];

const registrarPostulante = () =>
{
  
}

return(

<div className="p-9  mx-32">
{isOpenModalRegister && ( <Portal>
  <ModalInput
  titleModal={tituloModalRegister}
              titleClickFunction="Enviar"
              closeFunction={() => setisOpenModalRegister(false)}
              onClickFunction={registrarPostulante}
  >
    
  </ModalInput>

  </Portal>)  }




<p className="text-center font-medium text-xl"> OFERTAS LABORALES </p>
<br/>
<hr className="h-1 bg-black"></hr>
<br/>
<br/>

<div className="grid grid-rows-3  gap-y-10">

{/* fila 1 */}
  <div className="grid grid-cols-3 gap-15">

  <div>
  <h4 className="font-medium">{ofertas[0].cargo}</h4>


  <p className="text-sm">
  Responsable de la planificación,&nbsp;organización,  <br/>gestión de las actividades que se desarrollan en tienda  <br/>(internas y externas).                                                <br/>
                                                <br/>Fecha Publicación: 15/09/2020                                                <br/>Fecha Vencimiento: Sin fecha de vencimiento                                                <br/><br/>Requisitos:
                                                <br/>Edad: Mayores de 18 años
                                                <br/>¿Personas con discapacidad?: Sí        


  </p>
  <div className='flex justify-center mt-5'>
  <Botonbl  nombre = 'Postula' onClick = {()=>{clickpostular(ofertas[0].cargo)}} ></Botonbl>
  </div>
  
  </div>


  <div>
<h4 className="font-medium">{ofertas[1].cargo}</h4>
<span className="text-sm">

                                                Encargado de ofrecer los productos de tienda informando al cliente sobre la variedad, la calidad y las características más resaltante de los productos.                                                <br/>
                                                <br/>Fecha Publicación: 15/09/2020                                                <br/>Fecha Vencimiento: Sin fecha de vencimiento                                                <br/><br/>Requisitos:
                                                <br/>Edad: Mayores de 18 años
                                                <br/>¿Personas con discapacidad?: Sí                                           
</span>
   <div className='flex justify-center mt-5'>
  <Botonbl  nombre = 'Postula' onClick = {()=>{clickpostular(ofertas[5].cargo)}} ></Botonbl>
  </div>
</div>




  </div>


</div>
<p className="text-gray-600 font-semibold mt-4">*Para postular deberás tener más de 18 años de edad (salvo excepciones previstas en la Ley), la jornada laboral es de 48 horas semanales, y de conformidad con la Ley 29973 podrán participar de nuestros procesos de selección y contratación las personas con discapacidad.  </p>
</div>


);
}

export default Cuerpo;