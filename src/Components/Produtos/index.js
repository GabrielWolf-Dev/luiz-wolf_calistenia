import React from 'react';

import MainSection from './MainProduct';
import ListProducts from './ListProducts';
import { Line } from '../UI';

export default function Produtos({ theme, db }) {
  return (
    <main>
      <MainSection theme={theme} />
      <Line />
      <ListProducts db={db} theme={theme} />
    </main>
  );
}
