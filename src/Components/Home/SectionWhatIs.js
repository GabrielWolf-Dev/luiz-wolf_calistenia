import React from 'react';
import styled from 'styled-components';

import whatIsCalisthenics from '../../assets/img/whatIsCalisthenics.png';
import {
  Box,
  ImgSections,
  DefaultParagraph,
  TitleContentSections,
} from '../UI';

const SectionWhatIsBox = styled(Box)`
  padding: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: ${({ theme }) => theme.alternativeBg};
`;

const SectionWhatIsContent = styled.div`
  width: 100%;
  max-width: 700px;
  padding: 48px 2%;
`;

const TitleContent = styled(TitleContentSections)`
  color: ${({ theme }) => theme.flashyColor};
`;

const OtherParagraph = styled(DefaultParagraph)`
    color: #F7F5F5;
`;

export default function SectionWhatIs() {
  return (
    <SectionWhatIsBox>
      <ImgSections src={whatIsCalisthenics} alt="Atleta calistênico fazendo o movimento chamado parada de mão" />
      <SectionWhatIsContent>
        <TitleContent>O que é calistenia?</TitleContent>
        <OtherParagraph>
          Resumidamente a calistenia é um esporte aonde você utiliza
          o próprio peso do corpo para treinar,
          os movimentos da calistenia costumam "desafiar a gravidade",
          ou seja , você usa a força gravitacional para gerar sobrecarga ao seu corpo.
        </OtherParagraph>
        <OtherParagraph>
          Ela surgiu na Grécia antiga e foi difundida na França e Inglaterra no século XIX,
          pelo Suíço Phoktion Heinrich Clias, que misturava a
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
      </SectionWhatIsContent>
    </SectionWhatIsBox>
  );
}
