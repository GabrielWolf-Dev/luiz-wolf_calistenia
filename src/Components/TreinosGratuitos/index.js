import React from 'react';

import {
  Line,
  TitleContentSections,
  Box,
  ImgSections,
  NotFoundMessage as Phrase,
} from '../UI';
import MainTreinos from './MainTreinos';
import Videos from './Videos';

import raceLight from '../../assets/svg/raceLight.svg';
import raceDark from '../../assets/svg/raceDark.svg';

export default function TreinosGratuitos({ theme, db }) {
  return (
    <main>
      <MainTreinos theme={theme} />
      <Line />
      <TitleContentSections>Treinos</TitleContentSections>
      <Videos db={db} />
      <Box>
        {
          theme ? <ImgSections style={{ maxWidth: '880px' }} src={raceLight} alt="Ilustração de um corredor" />
            : <ImgSections style={{ maxWidth: '880px' }} src={raceDark} alt="Ilustração de um corredor" />
        }
        <Phrase style={{ textAlign: 'center' }}>
          Lembre-se: O sucesso é só consequência de todo trabalho duro!
        </Phrase>
      </Box>
    </main>
  );
}
