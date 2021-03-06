import React from 'react';
import styled from 'styled-components';

import whatIsCalisthenics from '../../assets/img/whatIsCalisthenics.png';
import {
  Box,
  ImgSections,
  DefaultParagraph,
  TitleContentSections,
  SectionContent,
} from '../UI';

const WhatIsBox = styled(Box)`
  padding: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: ${({ theme }) => theme.alternativeBg};

  @media screen and (max-width: 1280px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const TitleContent = styled(TitleContentSections)`
  color: ${({ theme }) => theme.flashyColor};
`;

const OtherParagraph = styled(DefaultParagraph)`
    color: #F7F5F5;
`;

const PhraseGerman = styled.span`
  font-size: 1.4rem;
  font-weight: 400;
  padding: 16px 2%;
  color: #F7F5F5;
  text-align: left;
`;

export default function SectionWhatIs() {
  return (
    <WhatIsBox id="Sobre">
      <ImgSections src={whatIsCalisthenics} alt="Atleta calistênico fazendo o movimento chamado parada de mão" />
      <SectionContent>
        <TitleContent>O que é calistenia?</TitleContent>
        <OtherParagraph>
          Resumidamente a calistenia é um esporte aonde você utiliza
          o próprio peso do corpo para treinar,
          os movimentos da calistenia costumam "desafiar a gravidade",
          ou seja , você usa a força gravitacional para gerar sobrecarga ao seu corpo.
        </OtherParagraph>
        <OtherParagraph>
          Ela surgiu na Grécia antiga e foi difundida na França e Inglaterra no século XIX,
          pelo Suíço
          {' '}
          <PhraseGerman lang="de">Phoktion Heinrich Clias</PhraseGerman>
          , que misturava a
          calistenia e ginástica olímpica no seu programa de exercícios.
        </OtherParagraph>
        <OtherParagraph>
          A partir disso ela começou a se tornar muito famosa e acessível, principalmente
          por causa de seus movimentos muito desafiadores,
          como os Muscle ups, Parada de mãos, Front lever, Back lever e etc.
        </OtherParagraph>
        <OtherParagraph>
          Hoje a Calistenia é usada por outros esportes como o Crossfit,
          Funcional e Street Workout.
        </OtherParagraph>
      </SectionContent>
    </WhatIsBox>
  );
}
