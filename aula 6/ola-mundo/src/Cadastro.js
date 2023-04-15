import './App.css';
import React, { useState } from 'react';

export default function Cadastro() {
    const[nome, setNome] = useState("");
    const[endereco, setEndereco] = useState("");
    const[telefone, setTelefone] = useState("");
    const[preferencias, setPreferencias] = useState("");
    const[nomeT, setNomeT] = useState("");
    const[cvc, setCvc] = useState("");
    const[data, setData] = useState("");

    function handleNomeChange(event) {
        setNome(event.target.value)
    }

    function handleEnderecoChange(event) {
        setEndereco(event.target.value)
    }

    function handleTelefoneChange(event) {
        setTelefone(event.target.value)
    }

    function handlePreferenciasChange(event) {
        setPreferencias(event.target.value)
    }

    function handleNomeTChange(event) {
        setNomeT(event.target.value)
    }

    function handleCvcChange(event) {
        setCvc(event.target.value)
    }

    function handleDataChange(event) {
        setData(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log(`Nome: ${nome}, Endereço: ${endereco}, Telefone: ${telefone}`);
    }


  return (
    <div className="form-custom">
      <form onSubmit={handleSubmit}>
        <label>
            Nome:
            <input type='text' value={nome} onChange={handleNomeChange} />
        </label>

        <br/>

        <label>
            Endereco:
            <input type='text' value={endereco} onChange={handleEnderecoChange} />
        </label>

        <br/>

        <label>
            Telefone:
            <input type='text' value={telefone} onChange={handleTelefoneChange} />
        </label>


        <br/>

        <label>
            Preferências:
            <button  type="submit" >Ação    </button>
            <button  type="submit" >Suspense</button>
            <button  type="submit" >Infantil</button>
        </label>

        <br/>

        <h1>Dados Bancários</h1>
        
        <label>
            Nome do titular:
            <input type='text' value={nomeT} onChange={handleNomeTChange} />
        </label>

        <br/>

        <label>
            CVC:
            <input type='text' value={cvc} onChange={handleCvcChange} />
        </label>

        <br/>

        <label>
            Data de validade:
            <input type='text' value={data} onChange={handleDataChange} />
        </label>

        <br/>

        <button type='submit'>Enviar</button>
      </form>
    </div>
  );
}