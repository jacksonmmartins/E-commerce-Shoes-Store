import React from 'react';
import { MDBCarousel, MDBCarouselItem, MDBCarouselCaption } from 'mdb-react-ui-kit';

//Imports dos destaques
import Promo from '../Img/Ofertas do Dia.png';
import Novidades from '../Img/Novidades.png';
import Cadastro from '../Img/Baner_cadastro.png'

export default function Carouselhome() {
  return (
    <MDBCarousel showControls fade className='card'>
      <MDBCarouselItem >
        <img src={Promo} className='d-block w-100' alt='...' />
        <MDBCarouselCaption>

        </MDBCarouselCaption>
      </MDBCarouselItem>

      <MDBCarouselItem >
        <img src={Novidades} className='d-block w-100' alt='...' />
        <MDBCarouselCaption>

        </MDBCarouselCaption>
      </MDBCarouselItem>

      <MDBCarouselItem >
        <img src={Cadastro} className='d-block w-100' alt='...' />
        <MDBCarouselCaption>

        </MDBCarouselCaption>
      </MDBCarouselItem>
    </MDBCarousel>
  );
}