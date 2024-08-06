function Navbar() {
return(
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#navbar">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-item nav-link active" href="#home">Home <span class="sr-only">(current)</span></a>
      <a class="nav-item nav-link" href="#features">Features</a>
      <a class="nav-item nav-link" href="#pricing">Pricing</a>
      <a class="nav-item nav-link disabled" href="#disable">Disabled</a>
    </div>
  </div>
</nav>
)
}

export default Navbar;