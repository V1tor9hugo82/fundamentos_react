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
import DiretaPai from './components/comunicacao/DiretaPai';
import IndiretaPai from './components/comunicacao/IndiretaPai';
import Input from './components/formulario/Input';
import Contador from './components/contador/Contador';
import Mega from './components/Mega/Mega';

export default () => (
  <div className='App'>
    <h1>Fundamentos React2</h1>
    <div className="Cards">

      <Card titulo="13 Mega sena" color="#72f824">
        <Mega qtde={8} />
      </Card>

      <Card titulo="12 Contador" color="#65e280">
        <Contador numeroInicial={10}></Contador>
      </Card>


      <Card titulo="11 Componente Contrlado" color="#0cff41">
        <Input></Input>
      </Card>

      <Card titulo="10 Comunicação Indireta" color="#ff960c">
        <IndiretaPai></IndiretaPai>
      </Card>


      <Card titulo="9 Comunicação Direta" color="#FFD60C">
        <DiretaPai></DiretaPai>
      </Card>


      <Card titulo="8 Renderização Condicional" color="#008b8b">
        <ParOuImpar numero={20}></ParOuImpar>
        <UsuarioInfo usuario={{ nome: 'Vitor' }} />
      </Card>

      <Card titulo="7 Lista de produtos" color="#135A92">
        <TabelaProdutos></TabelaProdutos>
      </Card>

      <Card titulo="6 Repatição" color="#3CD2FC">
        <ListaAluno></ListaAluno>
      </Card>

      <Card titulo="5 Componente com Filho" color="#f3a40a">
        <Familia sobrenome="Zangirolame" >
          <FamiliaMenbro nome="Julia" />
          <FamiliaMenbro nome="Vitor" />
        </Familia>
      </Card>

      <Card titulo="4 Desafio Aleatorio" color="#2B7ED8">
        <Aleatorio min={1} max={60} />
      </Card>

      <Card titulo="3 Fragment" color="#B7A208">
        <Fragment />
      </Card>

      <Card titulo="2 Com Parâmetro" color="#4F39AA">
        <ComParametro
          titulo="Situação da aluna"
          aluno="Julia" nota={9.8}
        />
        <ComParametro
          titulo="Situação da aluna"
          aluno="Vitor" nota={9.7}
        />
      </Card>

      <Card titulo="1 Primeiro Componente" color="#8CD76E">
        <Primeiro></Primeiro>

      </Card>

    </div>




  </div>
)
