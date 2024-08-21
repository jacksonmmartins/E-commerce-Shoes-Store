import { Link } from "react-router-dom";
import '../index.css'

function Categorias() {
    return (
        <div>
            <br />
          
            <div class="card mb-3">
                <div class="row g-0">
                    <div class="col-md-4">
                        <Link to='/modaverao'>
                        <img src="https://img.freepik.com/fotos-gratis/vista-do-estudio-de-uma-mulher
                                  -alegre-com-um-sorriso-dentuco-usando-oculos-escuros-da-moda-chapeu-de-
                                  palha_273609-17521.jpg?t=st=1723670877~exp=1723674477~hmac=3f761a2f258df
                                  4d4e10a2bb1ecb6b02e5b4c09fcc3ae40de53290526a77b08e5&w=996"
                            class="img-fluid rounded-start" alt="..." />
                        </Link>
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <Link to='/modaverao' class="desativarsublinhado">
                            <h4 class="card-title text-dark">Moda Verão</h4>
                            <h5 class="card-text">Aproveite nossas ofertas de verão, para todas as ocasiões</h5>
                            </Link>
                        </div>
                        
                    </div>
                </div>
            
                <div class="card mb-2">
                    <div class="row g-0">
                        <div class="col-md-4">
                        <Link to='/modainverno'>
                            <img src="https://img.freepik.com/fotos-gratis/duas-jovens-garotas-hippie-sorridentes-bonitas-em-sueteres-de-inverno
                                      -da-moda-modelos-positivos-se-divertindo-e-se-abracando_158538-17578.jpg?t=st=1723671127~exp=1723674727~hm
                                      ac=1a984c0d8d96c0aa9c469812152bef25bbfe2f0dc091c30d22d25afde85a6ef5&w=996"
                                class="img-fluid rounded-start" alt="..." />
                        </Link>
                        </div>

                        <div class="col-md-8">
                            <div class="card-body">
                            <Link to='/modainverno' class="desativarsublinhado">
                                <h4 class="card-title text-dark">Moda Inverno</h4>
                                <h5 class="card-text">Também estamos presente no inverno, você pode contar com calçados incriveis</h5>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card mb-">
                    <div class="row g-0">
                        <div class="col-md-4">
                        <Link to='/vestoutlet'>
                            <img src="https://img.freepik.com/fotos-gratis/elegante-mulher-adulta-segurando-sacolas-com-espaco-
                                        de-copia_23-2148624969.jpg?t=st=1723672359~exp=1723675959~hmac=2976e2a0e8ed36d8607852af
                                        adca2c1b86e56fb2d34622ddf0158045fe04bc39&w=1060"
                                class="img-fluid rounded-start" alt="..." />
                        </Link>
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                            <Link to='/vestoutlet' class="desativarsublinhado">
                                <h4 class="card-title text-dark">Linha Outlet</h4>
                                <h5 class="card-text">O melhor preço sempre, confira já!</h5>
                            </Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <br />
            <br />
            <br />
        </div>
    )
}

export default Categorias;
