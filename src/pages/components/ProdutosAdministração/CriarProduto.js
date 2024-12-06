import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateProduct = (props) => {
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    titulo: "",
    colecao: "",
    preco: "",
    sku: "",
  });

  const onChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://api-cadastro-de-produtos.vercel.app/api/products/", product)
      .then((res) => {
        setProduct({
          titulo: "",
          colecao: "",
          preco: "",
          sku: "",
        });
        // Push to /
        navigate("/");
      })
      .catch((err) => {
        console.log("Error in CreateCupom!");
      });
  };

  return (
    <div className="CreateProduct">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <br />
            <Link to="/" className="btn btn-outline-warning float-left">
              Mostrar lista de Produtos
            </Link>
          </div>
          <div className="col-md-10 m-auto">
            <h1 className="display-4 text-center text-light">Adicionar Produto</h1>
            <p className="lead text-center">Inserir novo Produto </p>
            <form noValidate onSubmit={onSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Titulo do Produto"
                  name="titulo"
                  className="form-control"
                  value={product.titulo}
                  onChange={onChange}
                />
              </div>
              <br />
              
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Coleção"
                  name="coleção"
                  className="form-control"
                  value={product.colecao}
                  onChange={onChange}
                />
              </div>
              <br />
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Preço do produto"
                  name="preço"
                  className="form-control"
                  value={product.preco}
                  onChange={onChange}
                />
              </div>
              <br />
              <div className="form-group">
                <input
                  type="text"
                  placeholder="SKU do produto"
                  name="sku"
                  className="form-control"
                  value={product.sku}
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

export default CreateProduct;