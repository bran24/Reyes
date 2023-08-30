import imagenes from '../../assets/imagenes';
import {FaWhatsapp} from "react-icons/fa6"
const Header = ()=>{


return(
<div>
<img  className='w-40 h-30 m-auto' src={imagenes.logoceintec}></img>


<div className='flex justify-end mr-44'>
<FaWhatsapp className='text-green-600 w-10 h-10 inline-block'></FaWhatsapp>
<p className='text-green-600 font-bold inline-block'>+51 912712456</p>

 </div>

<div className='bg-blue-700 w-full h-56 mt-5'> </div>

</div>


)






}

export default  Header;