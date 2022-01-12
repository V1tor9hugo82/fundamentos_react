import React from 'react';

import Aleatorio from './components/basicos/Aleatorio';
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragment from './components/basicos/Fragment';
import Card from './components/layout/Card';

export default () => (
  <div id='app'>
    <h1>Fundamentos React2</h1>
    <Card titulo="Desafio Aleatorio">
      <Aleatorio min={1} max={60} />
    </Card>

    <Card titulo="Fragment">
      <Fragment />
    </Card>

    <Card titulo="Com Parâmetro">
      <ComParametro
        titulo="Situação da aluna"
        aluno="Julia" nota={9.8}
      />
      <ComParametro
        titulo="Situação da aluna"
        aluno="Vitor" nota={9.7}
      />
    </Card>

    <Card titulo="Primeiro Componente">
      <Primeiro></Primeiro>

    </Card>



  </div>
)
