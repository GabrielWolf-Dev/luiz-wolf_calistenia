import React from 'react';

import { Line } from '../UI';
import MainEbooks from './MainEbooks';
import ListEbooks from './ListEbooks';

export default function Ebooks({ db, theme }) {
  return (
    <main>
      <MainEbooks theme={theme} />
      <Line />
      <ListEbooks theme={theme} db={db} />
    </main>
  );
}
