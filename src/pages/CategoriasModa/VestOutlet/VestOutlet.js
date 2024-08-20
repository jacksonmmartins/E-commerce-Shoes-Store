import Agasalho from '../VestOutlet/agasalho_green.png'
import Blusa from '../VestOutlet/blusa_decor.jpg'
import blusa_verde from '../VestOutlet/blusa_verde.jpg'
import Blusa_branca from '../VestOutlet/branca_basic.jpg'
import Chinelo_old from '../VestOutlet/chinelo_masculino.jpg'
import Damoda from '../VestOutlet/damoda_sandalia.jpg'
import Pink_basic from '../VestOutlet/pink_basic.jpg'
import Juvenil_run from '../VestOutlet/run_juvenil.jpg'

function ModaVerao() {
    return (
        <div>
            <br />
            <div class="container overflow-hidden text-center">
                <div class="row gx-4">
                    <div class="col">
                        <div class="card">
                            <img src={Agasalho} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-text"> Agasalho coleção todo dia

                                </h5>
                                <p>Apenas 200,00</p>
                                <button class="btn btn-primary" type="button"> + Adicionar ao carrinho</button>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src={Blusa} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-text"> Blusa estilo Caribe

                                </h5>
                                <p>Apenas 150,00</p>
                                <button class="btn btn-primary" type="button"> + Adicionar ao carrinho</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <br />
            <div class="container overflow-hidden text-center">
                <div class="row gx-4">
                    <div class="col">
                        <div class="card">
                            <img src={blusa_verde} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-text"> Blusa verde campanha beneficente

                                </h5>
                                <p>Apenas 75,00</p>
                                <button class="btn btn-primary" type="button"> + Adicionar ao carrinho</button>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="card">
                            <img src={Blusa_branca} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-text"> Blusa branca coleção Australia
                                </h5>
                                <p>Apenas 320,00</p>
                                <button class="btn btn-primary" type="button"> + Adicionar ao carrinho</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <div class="container overflow-hidden text-center">
                <div class="row gx-4">
                    <div class="col">
                        <div class="card">
                            <img src={Chinelo_old} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-text"> Chinelo Coleção Old Man

                                </h5>
                                <p>Apenas 270,00</p>
                                <button class="btn btn-primary" type="button"> + Adicionar ao carrinho</button>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="card">
                            <img src={Damoda} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-text"> Sandalia Damoda

                                </h5>
                                <p>Apenas 299,00</p>
                                <button class="btn btn-primary" type="button"> + Adicionar ao carrinho</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <div class="container overflow-hidden text-center">
                <div class="row gx-4">
                    <div class="col">
                        <div class="card">
                            <img src={Pink_basic} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-text"> Blusa Coleção Pink Basic
                                </h5>
                                <p>Apenas 200,00</p>
                                <button class="btn btn-primary" type="button"> + Adicionar ao carrinho</button>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="card">
                            <img src={Juvenil_run} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-text"> Tênis Juvenil Run

                                </h5>
                                <p>Apenas 180,00</p>
                                <button class="btn btn-primary" type="button"> + Adicionar ao carrinho</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
        </div>
    )
}

export default ModaVerao