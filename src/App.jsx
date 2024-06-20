import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Inicio from "./pages/Inicio"
import Tienda from "./pages/Tienta"
import Laptop from "./pages/Laptop"
import Movil from "./pages/Movil"
import Categorias from "./pages/Categorias"
import Contactos from "./pages/Contactos"
import Footer from "./components/Footer"


const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <main>
      <Routes>
          <Route path="/" element={<Inicio/>} />
          <Route path="/tienda" element={<Tienda/>} />
          <Route path="/laptop" element={<Laptop/>} />
          <Route path="/movil" element={<Movil/>} />
          <Route path="/categorias/:id" element={<Categorias/>} />
          <Route path="/contactos" element={<Contactos/>} />
          <Route path="*" element={<Inicio/>} />
      </Routes>
      </main>
      <Footer/>
  </BrowserRouter>
  )
}

export default App
