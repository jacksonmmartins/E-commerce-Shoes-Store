import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateCupom = (props) => {
  const navigate = useNavigate();

  const [cupom, setCupom] = useState({
    titulo: "",
    desconto: "",
    comousar: "",
    publisher: "",
  });

  const onChange = (e) => {
    setCupom({ ...cupom, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://mern-omega-ten.vercel.app/api/cupons", cupom)
      .then((res) => {
        setCupom({
          titulo: "",
          desconto: "",
          comousar: "",
          publisher: "",
        });
        // Push to /
        navigate("/");
      })
      .catch((err) => {
        console.log("Error in CreateCupom!");
      });
  };

  return (
    <div className="CreateCupom">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <br />
            <Link to="/" className="btn btn-outline-warning float-left">
              Mostrar lista de Cupons
            </Link>
          </div>
          <div className="col-md-10 m-auto">
            <h1 className="display-4 text-center text-light">Adicionar Cupom</h1>
            <p className="lead text-center">Inserir novo Cupom </p>
            <form noValidate onSubmit={onSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Titulo do Cupom"
                  name="titulo"
                  className="form-control"
                  value={cupom.titulo}
                  onChange={onChange}
                />
              </div>
              <br />
              
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Desconto"
                  name="desconto"
                  className="form-control"
                  value={cupom.desconto}
                  onChange={onChange}
                />
              </div>
              <br />
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Como utilizar o cupom"
                  name="comousar"
                  className="form-control"
                  value={cupom.comousar}
                  onChange={onChange}
                />
              </div>
              <br />
              <button
                type="submit"
                className="btn btn-outline-warning btn-block mt-4 mb-4 w-100"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateCupom;