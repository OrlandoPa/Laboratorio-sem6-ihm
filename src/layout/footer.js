import '../../src/style.css';

const Footer = () => {
    return <footer data-bs-theme="light" className="bd-footer py-4 py-md-5  capa2">
        <div className="container">
      <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top ">
        <div className="col mb-3">
          <a href="/" className="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none">
            <svg className="bi me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg>
          </a>
          <p className="text-white">© 2024</p>
        </div>

        <div className="col mb-3">

        </div>

        <div className="col mb-3 " >
          <h5 className="text-white">Ubicacion</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Av. Villareal 250, Trujillo, Peru</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Cruzando con Av. Santa</a></li>
          </ul>
        </div>

        <div className="col mb-3">
          <h5 className="text-white">Contactos</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Llamadas a los siguientes números:</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">923 170 004</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">954 451 887</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">936 461 776</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">978 854 347</a></li>
          </ul>
        </div>

        <div className="col mb-3">
          <h5 className="text-white">Identificacion</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Nombre:</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">ORLANDO MANUEL ADRIAN PADILLA RIOS</a></li>
          </ul>
        </div>
      </footer>
    </div>
    </footer>;
}

export default Footer;