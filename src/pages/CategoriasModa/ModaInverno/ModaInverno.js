import Comboestiloso from '../ModaInverno/Comboestiloso.jpg'
import cachecol from '../ModaInverno/cachecol.jpg'
import casaco from '../ModaInverno/casaco.jpg'
import suéter from '../ModaInverno/suéter.jpg'
import óculus from '../ModaInverno/óculus.jpg'
import tecnorun from '../ModaInverno/tecno run.jpg'
import sapatos_old from '../ModaInverno/sapatos_old.jpg'
import sportlite from '../ModaInverno/sportlite.jpg'

function ModaVerao() {
    return (
        <div>
            <br />
            <div class="container overflow-hidden text-center">
                <div class="row gx-4">
                    <div class="col">
                        <div class="card">
                            <img src={Comboestiloso} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-text"> Oferta imperdivel: Óculos de sol e gorro

                                </h5>
                                <p>Apenas 210,00</p>
                                <button class="btn btn-primary" type="button"> + Adicionar ao carrinho</button>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src={casaco} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-text"> Casaco coleção sempre contigo

                                </h5>
                                <p>Apenas 140,00</p>
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
                            <img src={suéter} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-text"> Suéter contigo sempre confort plus

                                </h5>
                                <p>Apenas 230,00</p>
                                <button class="btn btn-primary" type="button"> + Adicionar ao carrinho</button>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="card">
                            <img src={óculus} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-text"> Óculo estilo sempre

                                </h5>
                                <p>Apenas 300,00</p>
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
                            <img src={tecnorun} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-text"> Sapato TecnoRun Sport

                                </h5>
                                <p>Apenas 370,00</p>
                                <button class="btn btn-primary" type="button"> + Adicionar ao carrinho</button>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="card">
                            <img src={sapatos_old} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-text"> Classic Old Man

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
                            <img src={sportlite} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-text"> Tênis SportLite

                                </h5>
                                <p>Apenas 210,00</p>
                                <button class="btn btn-primary" type="button"> + Adicionar ao carrinho</button>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="card">
                            <img src={cachecol} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-text"> Cachecol estilo polo

                                </h5>
                                <p>Apenas 160,00</p>
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