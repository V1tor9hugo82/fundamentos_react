import React from 'react';
import DiretaFilho from './DiretaFilho';

export default function DiretaPai(props) {
  return (
    <div>
      <DiretaFilho nome="Julia" idade={20} nerd={true} />
      <DiretaFilho nome="Vitor" idade={30} nerd={false} />
    </div>
  );
}