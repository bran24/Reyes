
import Header from '../../organismos/Header'
import Footer from '../../organismos/Footer'
import Cuerpo from '../../organismos/Cuerpo'
import { FaSquareWhatsapp } from "react-icons/fa6"

const Home = () => {

  return (
    <>
      <a href='https://api.whatsapp.com/send?phone=51982726288&text=Deseo%20Postular'>

        <FaSquareWhatsapp className='text-green-600 w-16 h-16 inline-block fixed right-4 bottom-5 '></FaSquareWhatsapp>
      </a>

      <div className='flex flex-col min-h-screen' >
        <Header></Header>
        <Cuerpo></Cuerpo>

        <Footer></Footer>

      </div>

    </>


  )

}
export default Home;