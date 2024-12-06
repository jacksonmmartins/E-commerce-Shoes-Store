import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function ShowCupomDetails(props) {
  const [cupom, setCupom] = useState({});

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://mern-omega-ten.vercel.app/api/cupons/${id}`)
      .then((res) => {
        setCupom(res.data);
      })
      .catch((err) => {
        console.log('Erro ao retornar os detalhes do cupom');
      });
  }, [id]);

  const onDeleteClick = (id) => {
    axios
      .delete(`https://mern-omega-ten.vercel.app/api/cupons/${id}`)
      .then((res) => {
        navigate('/');
      })
      .catch((err) => {
        console.log('Erro ao retornar os detalhes do cupom');
      });
  };

  const CupomItem = (
    <div>
      <table className='table table-hover table-dark'>
        <tbody>
          <tr>
            <th scope='row'>1</th>
            <td>Titulo</td>
            <td>{cupom.titulo}</td>
          </tr>
          <tr>
            <th scope='row'>2</th>
            <td>Desconto</td>
            <td>{cupom.desconto}</td>
          </tr>
          <tr>
            <th scope='row'>5</th>
            <td>Como Usar</td>
            <td>{cupom.comousar}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );

  return (
    <div className='ShowCupomDetails'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-10 m-auto'>
            <br /> <br />
            <Link to='/' className='btn btn-outline-warning float-left'>
              Mostrar todos os cupons ativos
            </Link>
          </div>
          <br />
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Registro do cupom</h1>
            <p className='lead text-center'>Informações do cupom ativo</p>
            <hr /> <br />
          </div>
          <div className='col-md-10 m-auto'>{CupomItem}</div>
          <div className='col-md-6 m-auto'>
            <button
              type='button'
              className='btn btn-outline-danger btn-lg btn-block'
              onClick={() => {
                onDeleteClick(cupom._id);
              }}
            >
              Apagar cupom ativo
            </button>
          </div>
          <div className='col-md-6 m-auto'>
            <Link
              to={`/edit-cupom/${cupom._id}`}
              className='btn btn-outline-info btn-lg btn-block'
            >
              Editar cupom ativo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowCupomDetails;