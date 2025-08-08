import React from 'react';
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
import Promo from '../Img/Ofertas do Dia.webp';
import Novidades from '../Img/Novidades.webp';
import Cadastro from '../Img/Baner_cadastro.webp';

export default function Carouselhome() {
  return (
    <MDBCarousel showControls fade>
      <MDBCarouselItem>
        <img
          src={Promo}
          className='d-block w-100 round'
          alt='Ofertas do Dia'
          loading='eager' // imagem principal
        />
      </MDBCarouselItem>

      <MDBCarouselItem>
        <img
          src={Novidades}
          className='d-block w-100 round'
          alt='Novidades'
          loading='lazy'
        />
      </MDBCarouselItem>

      <MDBCarouselItem>
        <img
          src={Cadastro}
          className='d-block w-100 round'
          alt='Cadastro'
          loading='lazy'
        />
      </MDBCarouselItem>
    </MDBCarousel>
  );
}
