import './App.css';
import React from 'react';

import Aleatorio from './components/basicos/Aleatorio';
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragment from './components/basicos/Fragment';
import Card from './components/layout/Card';
import Familia from './components/basicos/Familia';
import FamiliaMenbro from './components/basicos/FamiliaMenbro';
import ListaAluno from './components/repeticao/ListaAlunos';
import TabelaProdutos from './components/repeticao/TabelaProdutos';
import ParOuImpar from './components/condicional/ParOuImpar';
import UsuarioInfo from './components/condicional/UsuarioInfo';

export default () => (
  <div className='App'>
    <h1>Fundamentos React2</h1>
    <div className="Cards">

      <Card titulo="futuro" color="#FFD60C">
      </Card>


      <Card titulo="Renderização Condicional" color="#008b8b">
        <ParOuImpar numero={20}></ParOuImpar>
        <UsuarioInfo usuario={{ nome: 'Vitor' }} />
      </Card>

      <Card titulo="Lista de produtos" color="#135A92">
        <TabelaProdutos></TabelaProdutos>
      </Card>

      <Card titulo="Repatição" color="#3CD2FC">
        <ListaAluno></ListaAluno>
      </Card>

      <Card titulo="Componente com Filho" color="#f3a40a">
        <Familia sobrenome="Zangirolame" >
          <FamiliaMenbro nome="Julia" />
          <FamiliaMenbro nome="Vitor" />
        </Familia>
      </Card>

      <Card titulo="Desafio Aleatorio" color="#2B7ED8">
        <Aleatorio min={1} max={60} />
      </Card>

      <Card titulo="Fragment" color="#B7A208">
        <Fragment />
      </Card>

      <Card titulo="Com Parâmetro" color="#4F39AA">
        <ComParametro
          titulo="Situação da aluna"
          aluno="Julia" nota={9.8}
        />
        <ComParametro
          titulo="Situação da aluna"
          aluno="Vitor" nota={9.7}
        />
      </Card>

      <Card titulo="Primeiro Componente" color="#8CD76E">
        <Primeiro></Primeiro>

      </Card>

    </div>




  </div>
)
