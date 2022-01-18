import React from 'react';


export default function IndiretaFilho(props) {
  const cb = props.quandoClicar
  const min = 50
  const max = 70
  const gerarIdade = () => parseInt(Math.random() * (20)) + 50
  const gerarNerd = () => Math.random() > 0.5
  return (
    <div>
      <div>Filho</div>
      <button onClick={_ => cb('Julia', gerarIdade(), gerarNerd())}>
        Fornercer Informaçoes
      </button>
    </div>
  );
}