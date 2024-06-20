import { Link } from "react-router-dom"
import logo from '../assets/logo.jpg'
import FiltroCategorias from "./Filtrocategorias"
const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-black" data-bs-theme="dark">
    <div className="container-fluid">
        <a className="navbar-brand" href="#"><img src={logo} alt="" width={100} /></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <Link to={"/inicio"} className="nav-link active fs-5" aria-current="page" href="#">Inicio</Link>
            </li>
            <li className="nav-item">
                <Link to={"/movil"} className="nav-link fs-5" href="#">Movil</Link>
            </li>
            <li className="nav-item">
                <Link to={"/laptop"} className="nav-link fs-5" href="#">Laptop</Link>
            </li>
            <li className="nav-item">
                <Link to={"/tienda"} className="nav-link fs-5" href="#">Tienda</Link>
            </li>
            <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle fs-5" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Categorias
            </a>
            <ul className="dropdown-menu">
               <FiltroCategorias/>
               
            </ul>
            </li>
            <li className="nav-item">
                <Link to={"/contactos"} className="nav-link fs-5" href="#">Contactos</Link>
            </li>
        </ul>
        <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Ok</button>
        </form>
        </div>
    </div>
    </nav>

  )
}

export default Header