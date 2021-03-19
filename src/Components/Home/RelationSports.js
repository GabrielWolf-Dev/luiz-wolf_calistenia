import React from 'react';
import styled from 'styled-components';

import halteres from '../../assets/img/halteres.png';
import {
  Box,
  ImgSections,
  DefaultParagraph,
  TitleContentSections,
  SectionContent,
} from '../UI';

const RelationBox = styled(Box)`
  padding: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: ${({ theme }) => theme.alternativeBg};
`;

const TitleContent = styled(TitleContentSections)`
  color: ${({ theme }) => theme.flashyColor};
`;

const OtherParagraph = styled(DefaultParagraph)`
    color: #F7F5F5;

    strong {
        font-size: 1.4rem;
    }
`;

const ListTypeTrain = styled.ul`
    list-style-type: disc;
    list-style-position: inside;
    color: #F7F5F5;

    li {
        font-size: 1.4rem;
        font-weight: 400;
        padding: 8px 2%;
    }
`;

export default function RelationSports() {
  return (
    <RelationBox>
      <ImgSections src={halteres} alt="Conjunto de halteres numa acadêmia" />
      <SectionContent>
        <TitleContent>Relação entre Calistenia e Academia</TitleContent>
        <OtherParagraph>
          Como na academia, a calistenia pode te proporcionar 3 tipos de treino :
        </OtherParagraph>
        <ListTypeTrain>
          <li>
            Treinos de Resistência --
            Você trabalha com várias repetições , acima de 16 para cada execício.
          </li>
          <li>
            Treinos de Hipertrofia -- Trabalha-se com um número de 5 a 16 repetições.
          </li>
          <li>
            Treinos de Força -- Com um número baixo de repetições,
            entre 1 a 5 repetições.
          </li>
        </ListTypeTrain>
        <OtherParagraph>
          Costumamos trabalhar com um número de 3 a 5 séries para cada exercício,
          mas o que mais vai importar é o volume total de séries e repetições
          para cada grupamento muscular no final da sua semana.
        </OtherParagraph>
        <OtherParagraph>
          Vale lembrar que esses 3 fatores são cruciais para seu desenvolvimento --
          <strong> volume, frequência de treino e intensidade.</strong>
        </OtherParagraph>
      </SectionContent>
    </RelationBox>
  );
}
