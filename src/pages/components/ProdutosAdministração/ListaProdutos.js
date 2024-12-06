import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ProdutoCard from '../ProdutosAdministração/ProdutoCard';

function ShowProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get('https://api-cadastro-de-produtos.vercel.app/api/products')
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log('Error from ShowCupomList');
      });
  }, []);

  const productList =
    products.length === 0
      ? ''
      : products.map((product, k) => <ProdutoCard product={product} key={k} />);

  return (
    <div className='ShowProductList'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <br />
            <h2 className='display-4 text-center text-white'>Painel de gerenciamento de Produtos</h2>
            <br />
          </div>
          
          <div className='col-md-11'>
            <Link
              to='/userhome'
              className='btn btn-outline-warning container'
            >
              Voltar para a página de administração de cupons
            </Link>
        
            <hr />
          </div>

          <div className='col-md-11'>
            <Link
              to='/create-product'
              className='btn btn-outline-warning container'
            >
              + Adicionar Produto
            </Link>
            <br />
            <br />
            <hr />
          </div>
        </div>

        <div className='list'>{productList}</div>
      </div>
    </div>
  );
}

export default ShowProductList;