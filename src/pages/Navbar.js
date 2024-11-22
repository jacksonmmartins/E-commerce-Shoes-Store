//Import do css da Navbar
import './Navbar.css';

function Navbar() {
  
  return (
    <>
    <br />
    <div className="nav justify-content-center">
      <nav class="navbar justify-content-center navbar-expand-lg d-inline-flex p-1 p-3 mb-3 rounded-5 navbar_background">
            <a class="nav-item nav-link text-white" href="/">Shoes@Store <span class="sr-only"></span></a>
            <a class="nav-item nav-link text-white" href="/">Pagina Inicial <span class="sr-only"></span></a>
            <a class="nav-item nav-link text-white" href="/supportus">Categorias</a>
            <a class="nav-item nav-link text-white" href="/contact">Contato</a>
            <a class="nav-item nav-link text-white" href="/login">Login</a>
      </nav>
    </div>
    </>
  )
}

export default Navbar;