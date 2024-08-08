

function Navbar() {
  return (

    <div className="nav justify-content-center">
      <nav class="navbar justify-content-center navbar-expand-lg d-inline-flex p-1 p-3 mb-3 bg-primary rounded-4">
            <a class="nav-item nav-link text-white" href="/">Tecnews <span class="sr-only"></span></a>
            <a class="nav-item nav-link text-white" href="/">Pagina Inicial <span class="sr-only"></span></a>
            <a class="nav-item nav-link text-white" href="/supportus">Apoie o projeto</a>
            <a class="nav-item nav-link text-white" href="/contact">Contato</a>
            <a class="nav-item nav-link text-white" href="/about">Sobre o projeto</a>
            <a class="nav-item nav-link text-white" href="/login">Login</a>
      </nav>
    </div>

  )
}

export default Navbar;