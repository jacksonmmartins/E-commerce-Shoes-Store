

function Navbar() {
  return (

    <div className="nav justify-content-center">
      <nav class="navbar justify-content-center navbar-expand-lg navbar-light bg-light d-inline-flex p-2">
        <a class="navbar-brand p-3 mb-2 bg-primary text-white" href="#navbar">Tecnoticias</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-item nav-link" href="/">Pagina Inicial <span class="sr-only"></span></a>
            <a class="nav-item nav-link" href="#features">Apoie o projeto</a>
            <a class="nav-item nav-link" href="#pricing">Contato</a>
            <a class="nav-item nav-link" href="#disable">Sobre o projeto</a>
            <a class="nav-item nav-link" href="#disable">Login</a>
          </div>
        </div>
      </nav>
    </div>

  )
}

export default Navbar;