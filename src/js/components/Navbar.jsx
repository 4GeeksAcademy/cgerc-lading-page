
const Navbar = (props) => {
	return (
		<nav className="navbar navbar-expand-lg bg-dark" style={{color: 'white'}}>
  <div className="container-fluid">
    <a className="navbar-brand p-3" href="#" style={{color: 'white'}}><b>{props.title}</b></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active p-3" aria-current="page" href="#" style={{color: 'white'}}>Nosotros</a>
        </li>
        <li className="nav-item">
          <a className="nav-link p-3" href="#" style={{color: 'white'}}>Trabajos realizados</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle p-3 " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color: 'white'}}>
            Servicios
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Gestión proyectos de construcción</a></li>
            <li><a className="dropdown-item" href="#">Arriendo de maquinarias para construcción</a></li>
            <li><a className="dropdown-divider"></a></li>
            <li><a className="dropdown-item" href="#">Traslado de materiales</a></li>
             <li><a className="dropdown-item" href="#">Servicio de limpieza clinica</a></li>
          </ul>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search"/>
        <button className="btn btn-primary" type="submit">Buscar</button>
      </form>
    </div>
  </div>
</nav>
	);
};

export default Navbar;