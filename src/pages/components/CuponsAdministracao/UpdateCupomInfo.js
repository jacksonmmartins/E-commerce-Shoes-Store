import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function UpdateCupomInfo(props) {
  const [cupom, setCupom] = useState({
    titulo: '',
    desconto: '',
    comousar: '',
    publisher: '',
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://mern-omega-ten.vercel.app/api/cupons/${id}`)
      .then((res) => {
        setCupom({
          titulo: res.data.titulo,
          desconto: res.data.desconto,
          comousar: res.data.comousar,
          publisher: res.data.publisher,
        });
      })
      .catch((err) => {
        console.log('Error ao atualizar as informações do cupom');
      });
  }, [id]);

  const onChange = (e) => {
    setCupom({ ...cupom, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const data = {
      titulo: cupom.titulo,
      desconto: cupom.desconto,
      comousar: cupom.comousar,
      publisher: cupom.publisher,
    };

    axios.put(`https://mern-omega-ten.vercel.app/api/cupons/${id}`, data)
      .then((res) => {
        navigate(`/show-cupom/${id}`);
      })
      .catch((err) => {
        console.log('Erro ao atualizar as informações!');
      });
  };

  return (
    <div className='UpdateCupomInfo'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 m-auto'>
            <br />
            <Link to='/' className='btn btn-outline-warning float-left'>
              Mostrar cupons ativos
            </Link>
          </div>
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Editar cupom ativo</h1>
            <p className='lead text-center'>Atualização de informações do cupom</p>
          </div>
        </div>

        <div className='col-md-8 m-auto'>
          <form noValidate onSubmit={onSubmit}>
            <div className='form-group'>
              <label htmlFor='titulo'>Titulo do Cupom</label>
              <input
                type='text'
                placeholder='Titulo do Cupom'
                name='Titulo'
                className='form-control'
                value={cupom.titulo}
                onChange={onChange}
              />
            </div>
          
            <br />

            <div className='form-group'>
              <label htmlFor='desconto'>Campanha</label>
              <input
                type='text'
                placeholder='Desconto'
                name='desconto'
                className='form-control'
                value={cupom.desconto}
                onChange={onChange}
              />
            </div>
            <br />

            <div className='form-group'>
              <label htmlFor='comousar'>Como usar o cupom</label>
              <textarea
                type='text'
                placeholder='Description of the Cupom'
                name='comousar'
                className='form-control'
                value={cupom.comousar}
                onChange={onChange}
              />
            </div>
            <br />


            <button
              type='submit'
              className='btn btn-outline-info btn-lg btn-block'
            >
              Atualizar Cupom
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UpdateCupomInfo;