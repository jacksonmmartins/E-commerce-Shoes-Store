import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CupomCard from './components/Cupomcard';

function CuponsHome() {
  const [cupons, setCupons] = useState([]);

  useEffect(() => {
    axios
      .get('https://mern-omega-ten.vercel.app/api/cupons')
      .then((res) => {
        setCupons(res.data);
      })
      .catch((err) => {
        console.log('Erro para apresentar cupons');
      });
  }, []);

  const cupomList =
    cupons.length === 0
      ? ''
      : cupons.map((cupom, k) => <CupomCard cupom={cupom} key={k} />);

  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <br />
            <h2 className='display-4 text-center text-white'>Aproveite nossos cupons exclusivos</h2> 
          </div>
        </div>
        <div class='list_2'>{cupomList}</div>
      </div>
    </div>
  );
}

export default CuponsHome;