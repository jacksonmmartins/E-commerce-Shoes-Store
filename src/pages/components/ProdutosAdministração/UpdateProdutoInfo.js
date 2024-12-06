import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function UpdateProdutoInfo(props) {
  const [product, setProduct] = useState({
    titulo: '',
    colecao: '',
    preco: '',
    sku: '',
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://api-cadastro-de-produtos.vercel.app/api/products/${id}`)
      .then((res) => {
        setProduct({
          titulo: res.data.titulo,
          colecao: res.data.colecao,
          preco: res.data.preco,
          sku: res.data.sku,
        });
      })
      .catch((err) => {
        console.log('Error ao atualizar as informações do cupom');
      });
  }, [id]);

  const onChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const data = {
      titulo: product.titulo,
      colecao: product.colecao,
      preco: product.preco,
      sku: product.sku,
    };

    axios.put(`https://api-cadastro-de-produtos.vercel.app/api/products/${id}`, data)
      .then((res) => {
        navigate(`/show-product/${id}`);
      })
      .catch((err) => {
        console.log('Erro ao atualizar as informações!');
      });
  };

  return (
    <div className='UpdateProductInfo'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 m-auto'>
            <br />
            <Link to='/' className='btn btn-outline-warning float-left'>
              Mostrar produtos ativos
            </Link>
          </div>
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Editar produto ativo</h1>
            <p className='lead text-center'>Atualização de informações do produto</p>
          </div>
        </div>

        <div className='col-md-8 m-auto'>
          <form noValidate onSubmit={onSubmit}>
            <div className='form-group'>
              <label htmlFor='titulo'>Titulo do Produto</label>
              <input
                type='text'
                placeholder='Titulo do Produto'
                name='Titulo'
                className='form-control'
                value={product.titulo}
                onChange={onChange}
              />
            </div>
          
            <br />

            <div className='form-group'>
              <label htmlFor='coleção'>Coleção</label>
              <input
                type='text'
                placeholder='Coleção'
                name='coleção'
                className='form-control'
                value={product.colecao}
                onChange={onChange}
              />
            </div>
            <br />

            <div className='form-group'>
              <label htmlFor='preço'>Preço do produto</label>
              <textarea
                type='text'
                placeholder='Preço do produto'
                name='preço'
                className='form-control'
                value={product.preco}
                onChange={onChange}
              />
            </div>
            <br />

            <div className='form-group'>
              <label htmlFor='sku'>SKU do produto</label>
              <textarea
                type='text'
                placeholder='SKU do produto'
                name='sku'
                className='form-control'
                value={product.sku}
                onChange={onChange}
              />
            </div>


            <button
              type='submit'
              className='btn btn-outline-info btn-lg btn-block'
            >
              Atualizar Produto
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UpdateProdutoInfo;