import Look from '../ModaVerao/look.jpg'
import Jaqueta from '../ModaVerao/jaqueta.jpg'
import Listrado from '../ModaVerao/listrado.jpg'
import Jeans from '../ModaVerao/jeans.jpg'
import Sports from '../ModaVerao/sports.jpg'
import Shorts from '../ModaVerao/shorts.jpg'

function ModaVerao() {
    return (
        <div>
            <br />
            <div class="container overflow-hidden text-center">
                <div class="row gx-4">
                    <div class="col">
                        <div class="card">
                            <img src={Look} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-text">Calça feminina imagine sun
                                    Coleção Beatriz Sousa

                                </h5>
                                <p>Apenas 45,99</p>
                                <button class="btn btn-primary" type="button"> + Adicionar ao carrinho</button>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src={Jaqueta} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-text"> Jaqueta esportiva Bike+

                                </h5>
                                <p>Apenas 130,00</p>
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
                            <img src={Listrado} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-text"> Blusa listrada tradicional coleção Old Man

                                </h5>
                                <p>Apenas 80,99</p>
                                <button class="btn btn-primary" type="button"> + Adicionar ao carrinho</button>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="card">
                            <img src={Sports} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-text"> Blusa verde de mangas coleção Antonio Ribeiro

                                </h5>
                                <p>Apenas 160,00</p>
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
                            <img src={Jeans} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-text">Blusa imagine sun
                                    Coleção Angiline Gonçalves tech

                                </h5>
                                <p>Apenas 190,00</p>
                                <button class="btn btn-primary" type="button"> + Adicionar ao carrinho</button>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="card">
                            <img src={Shorts} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-text"> Blusa verão estiloso

                                </h5>
                                <p>Apenas 100,00</p>
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
        </div>
    )
}

export default ModaVerao