import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import CupomCard from './Cupomcard';

function ShowCupomList() {
  const [cupons, setCupons] = useState([]);

  useEffect(() => {
    axios
      .get('https://mern-omega-ten.vercel.app/api/cupons')
      .then((res) => {
        setCupons(res.data);
      })
      .catch((err) => {
        console.log('Error from ShowCupomList');
      });
  }, []);

  const cupomList =
    cupons.length === 0
      ? ''
      : cupons.map((cupom, k) => <CupomCard cupom={cupom} key={k} />);

  return (
    <div className='ShowCupomList'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <br />
            <h2 className='display-4 text-center text-white'>Painel de gerenciamento de Cupons</h2>
            <br />
          </div>
          
          <div className='col-md-11'>
            <Link
              to='/create-cupom'
              className='btn btn-outline-warning container'
            >
              + Adicionar Cupom de Desconto
            </Link>
            <br />
            <br />
            <hr />
          </div>
        </div>

        <div className='list'>{cupomList}</div>
      </div>
    </div>
  );
}

export default ShowCupomList;