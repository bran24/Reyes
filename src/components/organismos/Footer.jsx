const Footer = ()=>{

return(
<div className="bg-slate-500 w-full h-48 mt-auto">

<div className="flex justify-center">

<div className="grid grid-cols-2 ">
                    <div>
                        <ul className="mt-3">
                            <li className="text-white"><a href="">Acerca de Reyes</a></li>
                            <li className="text-white"><a href="">Nuestra historia</a></li>
                            <li className="text-white"><a href="">Nuestros valores</a></li>
                            <li className="text-white"><a href="">Nuestras tiendas</a></li>
                        </ul>
                    </div>

                    <div>
                        <ul className="mt-3">
                            <li className="text-white"><a href="">Servicio al cliente</a></li>
                            <li className="text-white"><a href="">Legales promocionales</a></li>
                            <li className="text-white"><a href="">Contáctenos</a></li>
                            <li className="text-white"><a href="">Comprobantes electrónicos</a></li>
                            <li className="text-white"><a href="">Términos y condiciones</a></li>
                            <li className="text-white"><a href="">Políticas de seguridad y privacidad</a></li>
                        </ul>
                    </div>
                </div>
               

</div>
<div className="flex justify-center">

<span className="text-white font-bold mt-2">Reyes © Todos los derechos reservados 2022</span>
</div>






</div>);


}

export default Footer;