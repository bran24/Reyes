import PropTypes from 'prop-types';

const Botonbl = ({ onClick = null, nombre = 'postula', type = 'button' }) => {

  return (

    <button type={type} onClick={onClick} className={`text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-10 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700`}>{nombre}</button>



  )
}



Botonbl.propTypes = {

  onClick: PropTypes.func,
  nombre: PropTypes.string,
  type: PropTypes.string,

};

export default Botonbl