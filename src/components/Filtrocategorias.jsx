import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const API='https://dummyjson.com/products/category-list';
const FiltroCategorias = () => {
    const [datos, setDatos] = useState([])
    const getDatos = async () =>{
        try {
          const response = await fetch(API);
          const data = await response.json();
          //console.log(data)
          setDatos(data);
        } catch (error) {
          console.error(error)
        }
      };
      useEffect(()=>{
        getDatos();
      },[]);
  return (
    <>
       {datos && datos.map((item, index) => (
            <li key={index}><Link to={`/categorias/${item}`} className="dropdown-item" href="#">{item}</Link></li>
        ))}
    
    </>

  )
}

export default FiltroCategorias