import React from 'react';

export default function ComParametro(props) {
  const status = props.nota >= 7 ? 'Aprovado' : 'recuperação'
  const notaInt = Math.ceil(props.nota)
  return (
    <div>
      <h1>{props.titulo}</h1>
      <h3>
        <strong> {props.aluno} </strong>
        tem nota
        <strong> {notaInt} </strong>
        e Foi
        <strong> {status} </strong>
      </h3>
    </div>
  )
}