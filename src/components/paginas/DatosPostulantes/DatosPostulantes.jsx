
import Header from '../../organismos/Header'
import Footer from '../../organismos/Footer'
import { useEffect, useState } from 'react';
import Botonbl from '../../atomos/Botonbl';


const DatosPostulantes = () => {

  const [DatosPostulantes, setDatosPostulantes] = useState(null);



  useEffect(() => {
    obtenerPostulants();
  }, [])




  async function obtenerPostulants() {

    try {

      var response1 = await fetch("http://localhost:8000/api/postulacion", { method: "GET", headers: { 'Content-Type': 'application/json' } });
      var jsonresponse1 = await response1.json()

      setDatosPostulantes(jsonresponse1)
      console.log(jsonresponse1)


    }
    catch (err) {

      console.log(err)
    }




  }


  const descargarcv = () => {


  }

  return (

    <div className='flex flex-col min-h-screen' >
      <Header></Header>


      <div className="p-4 overflow-auto h-96 monturas">
        <table
          id="tableAdmin"
          className="table-auto text-center text-gray-700 w-full"
        >
          <thead>
            <tr
              className="border-l border-gray-400 opacity-90 text-white"
              style={{ background: '#1f6098' }}
            >

              <th className="border-r border-b border-gray-200 px-2 py-2 font-medium text-sm">
                Nr
              </th>
              <th className="border-r border-b border-gray-200 px-2 py-2 font-medium">
                <div className="text-sm">
                  <p className="whitespace-nowrap">Cargo</p>
                </div>
              </th>
              <th className="border-r border-b border-gray-200 px-2 py-2 font-medium">
                <div className="text-sm">
                  <p className="whitespace-nowrap">Fecha de Postualcion</p>
                </div>
              </th>
              <th className="border-r border-b border-gray-200 px-6 py-2 font-medium whitespace-nowrap">
                Tipo de Documento
              </th>
              <th className="border-r border-b border-gray-200 px-6 py-2 font-medium whitespace-nowrap">
                Documento
              </th>
              <th className="border-r border-b border-gray-200 px-6 py-2 font-medium whitespace-nowrap">
                Correo
              </th>

              <th className="border-r border-b border-gray-200 px-6 py-2 font-medium whitespace-nowrap">
                Medio
              </th>

              <th className="border-r border-b border-gray-200 px-6 py-2 font-medium whitespace-nowrap">
                Nombre
              </th>
              <th className="border-r border-b border-gray-200 px-6 py-2 font-medium whitespace-nowrap">
                Telefono
              </th>
              <th className="border-r border-b border-gray-200 px-6 py-2 font-medium whitespace-nowrap">
                Salario
              </th>
              <th className="border-r border-b border-gray-200 px-6 py-2 font-medium whitespace-nowrap">
                Descargar CV
              </th>
            </tr>
          </thead>
          {DatosPostulantes !== null && (
            <tbody>
              {DatosPostulantes.map((item) => (
                <tr
                  key={item.idPostulacion}

                >
                  <td className="border border-gray-350 px-2 py-2 font-medium">
                    {item.idPostulacion}
                  </td>

                  <td className="border border-gray-350 px-2 py-2 font-medium capitalize text-left">
                    {item.cargo || ''}
                  </td>
                  <td className="border border-gray-350 px-2 py-2 font-medium capitalize text-left">
                    {item.created_at || ''}
                  </td>

                  <td className="border border-gray-350 px-2 py-2 font-medium capitalize text-left">
                    {item.documento || ''}
                  </td>

                  <td className="border border-gray-350 px-2 py-2 font-medium capitalize">
                    {item.nrdocumento || ''}
                  </td>
                  <td className="border border-gray-350 px-2 py-2 font-medium capitalize rz">
                    {item.correo || ''}
                  </td>
                  <td className="border border-gray-350 px-2 py-2 font-medium capitalize rz">
                    {item.medio || ''}
                  </td>

                  <td className="border border-gray-350 px-2 py-2 font-medium capitalize">
                    {item.apaterno + ' ' + item.amaterno + ' ' + item.nombres}
                  </td>
                  <td className="border border-gray-350 px-2 py-2 font-medium capitalize rz">
                    {item.telefono || ''}
                  </td>
                  <td className="border border-gray-350 px-2 py-2 font-medium capitalize rz">
                    {item.aspsalarios || ''}
                  </td>
                  <td className="border border-gray-350 px-2 py-2 font-medium">
                    <div className="flex justify-center space-x-2">
                      <Botonbl type="button" nombre='Descargar' onClick={() => descargarcv()}></Botonbl>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          )}
        </table>

      </div>



      <Footer></Footer>

    </div>




  )

}
export default DatosPostulantes;