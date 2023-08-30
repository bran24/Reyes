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

const ofertas =[ {cargo : 'ADMINISTRADOR DE TIENDA'},
{cargo : 'GONDOLERO'},
{cargo : 'AUXILIAR DE ALMACEN DE TIENDA'},
{cargo : 'PREVENCIONISTA DE PERDIDAS'},
{cargo : 'CAJERO'},
{cargo : 'VENDEDOR DE MOSTRADOR'},
{cargo : 'SUB ADMINISTRADOR DE TIENDA'},
{cargo : 'ALMACENERO DE TIENDA'},

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
  <p className="text-sm">
                                                Responsable de reposición de productos en góndolas  <br/>según marca y tipo, así como cambios de precio,  <br/>ingreso de promociones y cambios de Lay Out.                                                <br/>
                                                <br/>Fecha Publicación: 15/09/2020                                                <br/>Fecha Vencimiento: Sin fecha de vencimiento                                                <br/><br/>Requisitos:
                                                <br/>Edad: Mayores de 18 años
                                                <br/>¿Personas con discapacidad?: Sí                                           


  </p>
  <div className='flex justify-center mt-5'>
  <Botonbl  nombre = 'Postula' onClick = {()=>{clickpostular(ofertas[1].cargo)}} ></Botonbl>
  </div>
  </div>
  <div>
  <h4 className="font-medium">{ofertas[2].cargo}</h4>
  <span className="text-sm">

                                                Encargado de apoyar en el almacén de la tienda, sacando los productos para despacho y realizando la reposición de mercadería.                                                <br/>
                                                <br/>Fecha Publicación: 15/09/2020                                                <br/>Fecha Vencimiento: Sin fecha de vencimiento                                                <br/><br/>Requisitos:
                                                <br/>Edad: Mayores de 18 años
                                                <br/>¿Personas con discapacidad?: Sí                                            


  </span>
  <div className='flex justify-center mt-5'>
  <Botonbl  nombre = 'Postula'onClick = {()=>{clickpostular(ofertas[2].cargo)}}></Botonbl>
  </div>
  </div>
  


  </div>

{/* fila 2 */}
<div className="grid grid-cols-3 gap-15">

<div>
<h4 className="font-medium">{ofertas[3].cargo}</h4>
<span className="text-sm">
                                                Responsable de la custodia de los bienes, la mercadería y prevención de perdidas en nuestras tiendas desde los diversos puntos de acceso.                                                <br/>
                                                <br/>Fecha Publicación: 15/09/2020                                                <br/>Fecha Vencimiento: Sin fecha de vencimiento                                                <br/><br/>Requisitos:
                                                <br/>Edad: Mayores de 18 años
                                                <br/>¿Personas con discapacidad?: Sí                                          
</span>
   <div className='flex justify-center mt-5'>
  <Botonbl  nombre = 'Postula' onClick = {()=>{clickpostular(ofertas[3].cargo)}} ></Botonbl>
  </div>
</div>
<div>
<h4 className="font-medium">{ofertas[4].cargo}</h4>
<span className="text-sm">

                                                Se encargará de garantizar las operaciones de caja, realizando la cobranza de los productos que compre cada cliente que asiste a tienda.                                                <br/>
                                                <br/>Fecha Publicación: 15/09/2020                                                <br/>Fecha Vencimiento: Sin fecha de vencimiento                                                <br/><br/>Requisitos:
                                                <br/>Edad: Mayores de 18 años
                                                <br/>¿Personas con discapacidad?: Sí                                            

</span>
   <div className='flex justify-center mt-5'>
  <Botonbl  nombre = 'Postula' onClick = {()=>{clickpostular(ofertas[4].cargo)}} ></Botonbl>
  </div>
</div>
<div>
<h4 className="font-medium">{ofertas[5].cargo}</h4>
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

{/* fila 3 */}
<div className="grid grid-cols-3 gap-15">

<div>
<h4 className="font-medium">{ofertas[6].cargo}</h4>
<span className="text-sm">

                                                Brindar soporte al Administrador de Tienda en la planificación, organización, gestión las actividades que se desarrollan en tienda (internas y externas).                                                <br/>
                                                <br/>Fecha Publicación: 15/09/2020                                                <br/>Fecha Vencimiento: Sin fecha de vencimiento                                                <br/><br/>Requisitos:
                                                <br/>Edad: Mayores de 18 años
                                                <br/>¿Personas con discapacidad?: Sí                                            

</span>
   <div className='flex justify-center mt-5'>
  <Botonbl  nombre = 'Postula' onClick = {()=>{clickpostular(ofertas[6].cargo)}} ></Botonbl>
  </div>
</div>
<div>
<h4 className="font-medium">{ofertas[7].cargo}</h4>
<span className="text-sm">

                                                Responsable de mantener en óptimas condiciones la mercadería, mediante un eficiente ingreso, locación, almacenamiento y control de salida de mercaderías.                                                <br/>
                                                <br/>Fecha Publicación: 01/05/2023                                                <br/>Fecha Vencimiento: 30/08/2023                                                <br/><br/>Requisitos:
                                                <br/>Edad: Mayores de 18 años
                                                <br/>¿Personas con discapacidad?: Sí                                          


</span>
   <div className='flex justify-center mt-5'>
  <Botonbl  nombre = 'Postula' onClick = {()=>{clickpostular(ofertas[7].cargo)}} ></Botonbl>
  </div>
</div>




</div>
</div>
<p className="text-gray-600 font-semibold mt-4">*Para postular deberás tener más de 18 años de edad (salvo excepciones previstas en la Ley), la jornada laboral es de 48 horas semanales, y de conformidad con la Ley 29973 podrán participar de nuestros procesos de selección y contratación las personas con discapacidad.  </p>
</div>


);
}

export default Cuerpo;