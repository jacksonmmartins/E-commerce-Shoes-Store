import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ProdutoCard = ({ product }) => {

  return (
    <div className='card-container text-center'>
      <Card>
        <br />
        <Link to={`/show-product/${product._id}`} class='disable_links'>
          <div className='desc'>
            <br />
            <div class='card-header text-dark'>
            <h2>
              {product.titulo}
            </h2>
            </div>
            <h3>{product.colecao}</h3>
            <p>{product.preco}</p>
            <p>{product.sku}</p>
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

export default ProdutoCard;