/* eslint linebreak-style: ["error", "windows"] */
/* eslint-disable */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import Botonbl from '../atomos/Botonbl'
import { FaRegMessage, FaXmark, FaFile, FaHouseCrack, FaCity, FaPhone } from "react-icons/fa6"
import FormSelectInput from '../atomos/formInputs/formSelectInput'
import FormTextInput from '../atomos/formInputs/formTextInput'
import axios from 'axios';
const ModalInput = ({
  titleModal, closeFunction, onClickFunction, titleClickFunction, defaultNumber,
}) => {
  const [archivos, setArchivos] = useState(null);

  const [visibleitem1, setVisibleintem1] = useState(true)

  const [visibleitem2, setVisibleintem2] = useState(false)
  // FORM VARIABLES
  const {
    register, watch, reset, setValue, clearErrors, handleSubmit, setFocus, formState: { errors },
  } = useForm();


  const departamentos = ['AMAZONAS',
    'ANCASH',
    'APURIMAC',
    'AREQUIPA',
    'AYACUCHO',
    'CAJAMARCA',
    'CALLAO',
    'CUSCO',
    'HUANCAVELICA',
    'HUANUCO',
    'ICA',
    'JUNIN',
    'LA LIBERTAD',
    'LAMBAYEQUE',
    'LIMA',
    'LORETO',
    'MADRE DE DIOS',
    'MOQUEGUA',
    'PASCO',
    'PIURA',
    'PUNO',
    'SAN MARTIN',
    'TACNA',
    'TUMBES',
    'UCAYALI']


  const medioenterarse = [
    'Facebook',
    'Whatsapp',
    'Afiche/Volante',
    'Aptitus',
    'Radio',
    'Tv/Television',
    'Municipalidades',
    'Computrabajo',
    'Municipalidades'
  ]

  const paisnac = [
    'Facebook',
    'Whatsapp',
    'Afiche/Volante',
    'Aptitus',
    'Radio',
    'Tv/Television',
    'Municipalidades',
    'Computrabajo',
    'Municipalidades'
  ]

  const aspsalarios = ['1001 a 1500', '1501 a 2000', '2001 a 2500', '2501 a 3000', '3001 a 3500', '3501 a 4000', '4001 a 4500', '4501 a 5000', '5001 a 5500', '5501 a 6000', '6001 a 6500', '6501 a 7000', '7001 a 7500', '7501 a 8000', '8001 a 8500', '8501 a 9000', '9001 a 9500', '9501 a 10000', '10000 a mas']



  const subirArchivos = (e) => {

    if (e[0].name != undefined) {
      const ext = e[0].name.split('.').pop();

      if (ext == 'pdf') {

        setArchivos(e);
      }

      else {

        alert('Error,solo se acepta en formato .pdf')

      }
    }



  }


  const botonocultar = () => {

    const tipodocumento = document.getElementById('tipodocumento').value ?? ''

    const nrdocumento = document.getElementById('nrdocumento').value ?? ''

    const correo = document.getElementById('correo').value ?? ''

    const medio = document.getElementById('medioenteraste').value ?? ''

    const departamento = document.getElementById('departementosel').value ?? ''

    const provincia = document.getElementById('provincia').value ?? ''

    const distrito = document.getElementById('distrito').value ?? ''


    if (tipodocumento != 'select' && nrdocumento != '' && correo != '' && medio != '' && departamento != 'select' && provincia != '' && distrito != '') {
      setVisibleintem1(false)
      setVisibleintem2(true)

    }
    else {

      alert("Error, Falta completar datos")
    }



  }

  const onSubmit = (data) => {
    let cv_name = '';
    if (archivos != null) {

      const ext = archivos[0].name.split('.').pop();
      const filename = Date.now();
      cv_name = `${filename}.${ext}`;

      const formDatacv = new FormData();

      formDatacv.append("file", archivos[0], `${filename}.${ext}`);

      axios
        .post('http://localhost:8000/api/archivocv', formDatacv)
        .then((res) => {
          console.log(res);
        })


    }

    const datospostulates = {
      cargo: titleModal,
      documento: data.tipodocumento,
      nrdocumento: data.nrdocumento,
      correo: data.correo,
      medio: data.medioenteraste,
      departamento: data.departementosel,
      provincia: data.provincia,
      distrito: data.distrito,
      nombres: data.nombres,
      apaterno: data.apaterno,
      amaterno: data.amaterno,
      fechanac: data.fechanac,
      paisnac: data.paisnac,
      telefono: data.telefono,
      aspsalarios: data.aspsalarios,
      archivocv: cv_name != null ? cv_name : null,

    }
    console.log(datospostulates);



    crear(datospostulates);



  };

  async function crear(datospostulates) {

    try {

      var response1 = await fetch("http://localhost:8000/api/postulacion", { method: "POST", headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(datospostulates) });
      var jsonresponse1 = await response1.json()

      console.log(jsonresponse1)
      alert("Postulacion Registrado con Exito")
      closeFunction();

    }
    catch (err) {

      console.log(err)
    }




  }
  return (
    <>
      <div className="flex items-center justify-center w-full h-full z-50 fixed">
        <div className="flex p-4 pt-6 mt-2 flex-col justify-center absolute z-20 bg-white rounded-md
      w-11/12 sm:w-4/6 md:w-1/2 lg:w-2/5 max-h-screen overflow-y-auto"
        >
          <button type="button" onClick={() => closeFunction()} className="absolute right-3 top-2">
            <FaXmark />
          </button>
          <div className="flex flex-col justify-center items-center text-center">
            <h1 className="text-xl font-semibold flex flex-col justify-center items-center">
              {titleModal}
            </h1>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-center items-center ">
            {visibleitem1 && (<>
              <FormSelectInput
                inputName="tipodocumento"
                title="Tipo de Documento"
                placeholder='Documento'
                icon={<FaFile />}
                options={{
                  validate: {
                    select: (e) =>
                      e !== "select" || "Campo Obligatorio",
                  },
                }}
                register={register}
                watch={watch}
                errors={errors}
              >
                <option value="dni" className="text-gray-700">
                  DNI
                </option>
                <option value="CARNET DE EXTRANJERIA" className="text-gray-700">
                  CARNET DE EXTRANJERIA
                </option>
                <option value="PASAPORTE" className="text-gray-700">
                  PASAPORTE
                </option>
              </FormSelectInput>

              <FormTextInput
                inputName="nrdocumento"
                title="Documento"
                icon={<FaFile />}
                placeholder="Ingresar Documento"
                options={{
                  required: {
                    value: true,
                    message: 'Documneto requerido',
                  },
                  pattern: {
                    value: /^[0-9]+$/,
                    message: 'Documento invalido',
                  },
                  minLength: {
                    value: 8,
                    message: 'No menos de 8 digitos.',
                  }

                }}
                type="number"
                register={register}
                errors={errors}
              />



              <FormTextInput
                inputName="correo"
                title="Correo Electrónico"
                icon={<FaRegMessage />}
                placeholder="Ingresar Correo Electrónico"
                options={{
                  required: {
                    value: true,
                    message: 'Correo Electrónico requerido',
                  },
                  pattern: {
                    value: /^[a-zA-Z0-9@._]+$/,
                    message: 'Correo Electrónico invalido',
                  },
                }}
                type="email"
                register={register}
                errors={errors}
              />


              <FormSelectInput
                inputName="medioenteraste"
                title="Medio de Como Te Enteraste"
                icon={<FaHouseCrack />}
                placeholder="Medio"
                options={{
                  validate: {
                    value: (e) => e !== "select" || "Medio requerido",
                  },
                }}
                register={register}
                errors={errors}
                watch={watch}
              >

                {Array.isArray(medioenterarse) &&
                  medioenterarse.map((item, index) =>
                    <option
                      key={index}
                      value={item}
                      className="capitalize text-gray-700"
                    >
                      {item}
                    </option>
                  )}
              </FormSelectInput>


              <FormSelectInput
                inputName="departementosel"
                title="Departamentos"
                icon={<FaCity />}
                placeholder="Departamentos"
                options={{
                  validate: {
                    value: (e) => e !== "select" || "Departamento requerido",
                  },
                }}
                register={register}
                errors={errors}
                watch={watch}
              >

                {Array.isArray(departamentos) &&
                  departamentos.map((item, index) =>
                    <option
                      key={index}
                      value={item}
                      className="capitalize text-gray-700"
                    >
                      {item}
                    </option>
                  )}
              </FormSelectInput>


              <FormTextInput
                inputName="provincia"
                title="Provincia"
                icon={<FaCity />}
                placeholder="Ingresar Provincia"
                options={{
                  required: {
                    value: true,
                    message: "Provincia Requerida",
                  },
                  pattern: {
                    value: /^[a-zA-Z ]+$/,
                    message: 'Provincia invalido',
                  }

                }}
                register={register}
                errors={errors}
              />
              <FormTextInput
                inputName="distrito"
                title="Distrito"
                icon={<FaCity />}
                placeholder="Ingresar Distrito"
                options={{
                  required: {
                    value: true,
                    message: "Distrito Requerido",
                  },
                  pattern: {
                    value: /^[a-zA-Z ]+$/,
                    message: 'Distrito invalido',
                  }

                }}
                register={register}
                errors={errors}
              />
              <Botonbl type="button" nombre='Continuar' onClick={() => botonocultar()}></Botonbl>

            </>)}

            {visibleitem2 && (<> <FormTextInput
              inputName="apaterno"
              title="Apellido Paterno"
              icon={<FaRegMessage />}
              placeholder="Ingresar Apellido Paterno"
              options={{
                required: {
                  value: true,
                  message: "Apellido Paterno Requerido",
                },
              }}
              register={register}
              errors={errors}
            />

              <FormTextInput
                inputName="amaterno"
                title="Apellido Materno"
                icon={<FaRegMessage />}
                placeholder="Ingresar Apellido Materno"
                options={{
                  required: {
                    value: true,
                    message: "Apellido Materno Requerido",
                  },
                }}
                register={register}
                errors={errors}
              />
              <FormTextInput
                inputName="nombres"
                title="Nombres"
                icon={<FaRegMessage />}
                placeholder="Nombres"
                options={{
                  required: {
                    value: true,
                    message: "Nombres Requeridos",
                  },
                }}
                register={register}
                errors={errors}
              />

              <FormTextInput
                inputName="fechanac"
                title="Fecha de Nacimiento"
                type="date"
                icon={<FaRegMessage />}
                placeholder="Fecha"
                options={{
                  required: {
                    value: true,
                    message: "Fecha de Nacimiento Requerida",
                  },
                }}
                register={register}
                errors={errors}
              />

              <FormTextInput
                inputName="paisnac"
                title="Pais de Nacimiento"
                icon={<FaCity />}
                placeholder="Ingresar Pais de Nacimiento"
                options={{
                  required: {
                    value: true,
                    message: 'Pais de Nacimiento requerido',
                  },
                  pattern: {
                    value: /^[a-zA-Z ]+$/,
                    message: 'Pais de Nacimiento invalido',
                  },
                  minLength: {
                    value: 4,
                    message: 'No menos de 4 caracteres.',
                  },
                }}
                register={register}
                errors={errors}
              />
              <FormTextInput
                inputName="telefono"
                title="Teléfono"
                icon={<FaPhone />}
                placeholder="Ingresar Teléfono"
                options={{
                  required: {
                    value: true,
                    message: 'Teléfono requerido',
                  },
                  pattern: {
                    value: /^[0-9]+$/,
                    message: 'Teléfono invalido',
                  },
                  minLength: {
                    value: 9,
                    message: 'Coloque 9 digitos.',
                  },
                  maxLength: {
                    value: 9,
                    message: 'No colocar más de 9 digitos.',
                  },
                }}
                register={register}
                errors={errors}
              />

              <FormSelectInput
                inputName="aspsalarios"
                title="Aspiracion Salarial"
                icon={<FaCity />}
                placeholder="Aspiracion Salarial S/."
                options={{
                  validate: {
                    value: (e) => e !== "select" || "Aspiracion Salarial requerido",
                  },
                }}
                register={register}
                errors={errors}
                watch={watch}
              >

                {Array.isArray(aspsalarios) &&
                  aspsalarios.map((item, index) =>
                    <option
                      key={index}
                      value={item}
                      className="capitalize text-gray-700"
                    >
                      {item}
                    </option>
                  )}
              </FormSelectInput>

              <div className=' flex flex-col w-full mt-2 mb-2 '>
                <label form="archivos" className='font-semibold pl-2.5 text-gray-800'>Cargar Cv</label>
                <input type='file' name='archivos' accept=".pdf" required onChange={(e) => { subirArchivos(e.target.files) }}></input>
              </div>



              <Botonbl type="submit" nombre='Continuar' onClick={() => handleSubmit()}></Botonbl>
            </>)}

          </form>
        </div>
        {/* THIS DIV IS FOR BLACK BACKGROUND */}
        <div
          className="w-full h-full z-10 bg-gray-600 opacity-60"
        />
      </div>

    </>
  );
};

ModalInput.propTypes = {
  titleModal: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]).isRequired,
  onClickFunction: PropTypes.func.isRequired,
  titleClickFunction: PropTypes.string.isRequired,
  closeFunction: PropTypes.func.isRequired,
  defaultNumber: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

ModalInput.defaultProps = {
  defaultNumber: '',
};

export default ModalInput;
