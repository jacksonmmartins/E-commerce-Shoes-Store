import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import '../index.css'

function ComentariosHome() {
  return (
    <>

      <h2 class='display-5 text-center bg-dark rounded-pill text-white'>Comentários de nossos clientes</h2>

      <CardGroup>
        <Card bg='dark'>

          <Card.Body>
            <Card class='bg-light'>
              <Card.Title class='text-success text-center'>Usuário Anônimo</Card.Title>
            </Card>
            <br>
            </br>
            <Card.Text class='text-white text-center'>
              Atendimento excelente, cuidado com os produtos e experiência de descobrir o produto
              dentro da embalagem personalizado. Recomendo
            </Card.Text>
          </Card.Body>
          <Card.Text class='text-center'>
            <small className="text-white">Voltaria a comprar novamente!!!</small>
          </Card.Text>
        </Card>

        <Card bg='dark'>

          <Card.Body>
            <Card class='bg-light rounded'>
              <Card.Title class='text-success text-center'>Alberto Takamine</Card.Title>
            </Card>
            <br>
            </br>
            <Card.Text class='text-white text-center'>
              Tradicionamente a melhor da região, e com as melhores ofertas, e entrega muito rápida.
            </Card.Text>
          </Card.Body>
          <Card.Text class='text-center'>
            <small className="text-white">Sempre melhor preço</small>
          </Card.Text>
        </Card>

        <Card bg='dark'>
          <Card.Body>
            <Card class='bg-light'>
              <Card.Title class='text-success text-center'>Antonio Carlos</Card.Title>
            </Card>
            <br>
            </br>
            <Card.Text class='text-white text-center'>
              Muita variedade de produtos, e para todas as idades e estilos. Já garanti o meu e da minha
              família!
            </Card.Text>
          </Card.Body>
          <Card.Text class='text-center'>
            <small className="text-white">Cobre a oferta da concorrência</small>
          </Card.Text>
        </Card>
    
      </CardGroup>
    </>
  );
}

export default ComentariosHome;