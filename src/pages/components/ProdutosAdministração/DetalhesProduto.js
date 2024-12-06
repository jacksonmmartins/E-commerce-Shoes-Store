import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function ShowProductDetails(props) {
  const [product, setProduct] = useState({});

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://api-cadastro-de-produtos.vercel.app/api/products/${id}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.log('Erro ao retornar os detalhes do cupom');
      });
  }, [id]);

  const onDeleteClick = (id) => {
    axios
      .delete(`https://api-cadastro-de-produtos.vercel.app/api/products/${id}`)
      .then((res) => {
        navigate('/');
      })
      .catch((err) => {
        console.log('Erro ao retornar os detalhes do cupom');
      });
  };

  const ProductItem = (
    <div>
      <table className='table table-hover table-dark'>
        <tbody>
          <tr>
            <th scope='row'>1</th>
            <td>Titulo</td>
            <td>{product.titulo}</td>
          </tr>
          <tr>
            <th scope='row'>2</th>
            <td>Coleção</td>
            <td>{product.colecao}</td>
          </tr>
          <tr>
            <th scope='row'>5</th>
            <td>Preço</td>
            <td>{product.preco}</td>
          </tr>
          <tr>
            <th scope='row'>5</th>
            <td>SKU</td>
            <td>{product.sku}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );

  return (
    <div className='ShowProductDetails'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-10 m-auto'>
            <br /> <br />
            <Link to='/' className='btn btn-outline-warning float-left'>
              Mostrar todos os produtos ativos
            </Link>
          </div>
          <br />
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Registro do produto</h1>
            <p className='lead text-center'>Informações do produto ativo</p>
            <hr /> <br />
          </div>
          <div className='col-md-10 m-auto'>{ProductItem}</div>
          <div className='col-md-6 m-auto'>
            <button
              type='button'
              className='btn btn-outline-danger btn-lg btn-block'
              onClick={() => {
                onDeleteClick(product._id);
              }}
            >
              Apagar produto ativo
            </button>
          </div>
          <div className='col-md-6 m-auto'>
            <Link
              to={`/edit-product/${product._id}`}
              className='btn btn-outline-info btn-lg btn-block'
            >
              Editar produto ativo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowProductDetails;