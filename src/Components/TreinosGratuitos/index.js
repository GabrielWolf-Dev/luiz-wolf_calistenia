import React from 'react';

import { Line, TitleContentSections } from '../UI';
import MainTreinos from './MainTreinos';
import Videos from './Videos';

export default function TreinosGratuitos({ theme, db }) {
  return (
    <main>
      <MainTreinos theme={theme} />
      <Line />
      <TitleContentSections>Treinos</TitleContentSections>
      <Videos db={db} />
    </main>
  );
}
