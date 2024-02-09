import React from 'react';
import style from './FinalizarCompra.css'

const FinalizarCompraButton = () => {
  return (
    <div className='main-section'>
      {produtos.map(produto => (
        <div key={produto.id} className="card">
          <img src={produto.imagem} alt={produto.nome} />
          <div className="infos">
            <h1 className="nome">{produto.nome}</h1>
            <p className="descricao">{produto.descricao}</p>
          </div>
          <p className="preco">R$ {produto.preco.toFixed(2)}</p>
          <button>Adicionar</button>
        </div>
      ))}
    </div>
  );
};

export default FinalizarCompraButton;
