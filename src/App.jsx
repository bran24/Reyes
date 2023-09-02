
import './App.css'
import Home from './components/paginas/Home/Home'
import DatosPostulantes from './components/paginas/DatosPostulantes/DatosPostulantes'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/DatosPostulantes' element={<DatosPostulantes />}></Route>
      </Routes>

    </BrowserRouter>



  )
}

export default App





