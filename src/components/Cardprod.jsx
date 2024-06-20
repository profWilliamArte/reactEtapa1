import Detalle from "./Detalle"


const Cardprod = ({item}) => {

    

  return ( 
    <>
        <div className="col-md-4 col-lg-3 mb-4" >
                <div className="card h-100" data-bs-theme="dark">
                <div className="card-header p-0">
                    <img src={item.thumbnail} alt={item.title}  className="img-fluid" />
                </div>
                <div className="card-body text-center">
                    <h5>{item.title}</h5>
                    <p className="text-success">{item.brand}</p>
                    <h5 className="text-danger">{item.price.toFixed(2).toLocaleString()}$</h5>
                </div>
                <div className="card-footer text-center">
                    <button className="btn btn-outline-danger btn-sm mx-1" data-bs-toggle="modal" data-bs-target={`#${item.id}`} >Detalle</button>
                </div>
            </div>
        </div>
       <Detalle item={item} key={item.id} />
    </>  
  )
}

export default Cardprod