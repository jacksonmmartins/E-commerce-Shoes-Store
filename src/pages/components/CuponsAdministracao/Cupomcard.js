import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Desconto from '../Img/desconto.png'

const CupomCard = ({ cupom }) => {

  return (
    <div className='card-container text-center'>
      <Card>
        <br />
        <Link to={`/show-cupom/${cupom._id}`} class='disable_links'>
          <img
            src={Desconto}
            alt='Cupons'
            height={200}
            width={200}
          />
          <div className='desc'>
            <br />
            <div class='card-header text-dark'>
            <h2>
              {cupom.titulo}
            </h2>
            </div>
            <h3>{cupom.desconto}</h3>
            <p>{cupom.comousar}</p>
          </div>
        </Link>
        <br />
        <br />
        <br />
        <br />
      </Card>
    </div>
  );
};

export default CupomCard;