/* eslint linebreak-style: ["error", "windows"] */
/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import Botonbl from '../atomos/Botonbl'
import { FaRegMessage, FaXmark, FaFile, FaHouseCrack, FaCity } from "react-icons/fa6"
import FormSelectInput from '../atomos/formInputs/formSelectInput'
import FormTextInput from '../atomos/formInputs/formTextInput'
const ModalInput = ({
  titleModal, closeFunction, onClickFunction, titleClickFunction, defaultNumber,
}) => {
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
  const onSubmit = (data) => {
    const datospostulates = {
      cargo:titleModal,
      documento: data.tipodocumento,
      nrdocumento: data.nrdocumento,
      correo: data.correo,
      medio: data.medioenteraste,
      departamento: data.departementosel,
      provincia: data.provincia,
      distrito: data.distrito

      
      
    }
    console.log(datospostulates)
    crear(datospostulates);


  
  };

  async function crear(datospostulates){

    try{

      var response1 = await fetch("http://localhost:8000/api/postulacion",{method:"POST",headers: {'Content-Type': 'application/json'}, body: JSON.stringify(datospostulates)});
      var jsonresponse1 = await response1.json()
      console.log(jsonresponse1)
    }
    catch (err)
    {

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
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-center items-center mt-3">

            <FormSelectInput
              inputName="tipodocumento"
              title="Documento"
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
              title="N° Documento"
              icon={<FaFile />}
              placeholder="Ingrese N° Documento"
              options={{
                validate: {
                  empty: (v) =>
                    v !== "" || "Colocar Número de Documento",
                  dni: (v) =>
                    (watch("documentType") === "dni"
                      ? v.length === 8
                      : true) || "DNI debe tener 8 Digitos",
                  ruc: (v) =>
                    (watch("documentType") === "ruc"
                      ? v.length === 11
                      : true) || "RUC debe tener 11 Digitos",
                  carnet: (v) =>
                    (watch("documentType") === "carnet"
                      ? v.length === 9
                      : true) || "Carnet debe tener 9 Digitos",
                },
                pattern: {
                  value: /^[0-9]+$/,
                  message: "Número de Documento invalido",
                },
              }}
              type="number"
              register={register}
              errors={errors}
            />
            <FormTextInput
              inputName="correo"
              title="Correo"
              icon={<FaRegMessage />}
              placeholder="Ingresar Correo"
              options={{
                required: {
                  value: true,
                  message: "Dirección Correo Requerido",
                },
              }}
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
              }}
              register={register}
              errors={errors}
            />
            <Botonbl type="submit" nombre='Continuar' onClick={() => handleSubmit()}></Botonbl>

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
