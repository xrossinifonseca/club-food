import React, { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useStateContext } from "../context/StateContext";

const CepForm = () => {
  const { setShowCep, cep, setCep, local, setLocal, message, setMessage } =
    useStateContext();

  useEffect(() => {
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((resp) => resp.json())
      .then((data) => {
        setLocal(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    entrega();
  };

  const entrega = () => {
    const entrega = "RJ";

    if (local.uf != entrega) {
      return setMessage(false);
    } else {
      return setMessage(local.localidade);
    }
  };

  return (
    <div className="cep-container">
      <div className="cep-title">
        <h2>ENDEREÇO DE ENTREGA</h2>
        <AiOutlineClose
          size={35}
          className="icon-cep"
          onClick={() => setShowCep(false)}
        />
      </div>

      <form onSubmit={handleSubmit} className="cep-form">
        <input
          type="number"
          placeholder="CEP"
          name="cep"
          id="cep"
          onChange={(e) => setCep(e.target.value)}
          required
        />
        <button type="submit">Buscar</button>
        {!message && (
          <p className="cep-off">Desculpe não atendemos sua região.</p>
        )}
        <p className="cep-on">{message}</p>
      </form>
    </div>
  );
};

export default CepForm;
