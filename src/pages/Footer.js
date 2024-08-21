import Card from 'react-bootstrap/Card';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaSquareGithub } from "react-icons/fa6";
import { GrLinkedin } from "react-icons/gr";
import { FaMapMarkedAlt } from "react-icons/fa";

function Footer() {
  return (
    <Card className="text-center text-white bg-dark">
      <Card.Header>
        <h5>ShoesStore.com </h5></Card.Header>
      <div>
        <div class="container text-center">
          <div class="row row-cols-3 row-cols-lg-2 g-2 g-lg-3">

            <div class="card text-bg-light mb-3">
              <div class="col">
                <div class="p-3">
                  <div class='card-header'>
                    <h5>Nossa localização</h5>
                  </div>
                  <br />
                  <h6>
                    <FaMapMarkerAlt />
                    Av. Beira Mar - 1041</h6>
                  <p>Fortaleza-CE</p>
                  <h6><FaMapMarkedAlt /></h6>
                </div>
              </div>
            </div>

            <div class="card text-bg-light mb-3">
              <div class="col">
                <div class="p-3">
                  <div class='card-header'>
                    <h5>
                    Redes Sociais
                    </h5>
                  </div>
                </div>
                <div >
                  <h3>
                  <GrLinkedin />
                  <h6>Linkedin</h6>
                  </h3>
                  <h3><FaSquareGithub /> <h6>GitHub</h6>
                    </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </Card>
  );
}

export default Footer;