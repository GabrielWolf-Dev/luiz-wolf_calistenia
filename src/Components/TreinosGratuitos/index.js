import React from 'react';

import { Line } from '../UI';
import MainTreinos from './MainTreinos';
import Videos from './Videos';

export default function TreinosGratuitos({ theme }) {
  return (
    <main>
      <MainTreinos theme={theme} />
      <Line />
      <Videos />
    </main>
  );
}
