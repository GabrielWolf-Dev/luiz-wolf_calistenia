import React from 'react';
import styled from 'styled-components';

import {
  Container,
  Box,
  TitleContentSections,
} from '../UI';
import verissimo from '../../assets/img/verissimo.png';
import pinho from '../../assets/img/pinho.png';
import luizMesquita from '../../assets/img/luizMesquita.png';

const ContainerShapes = styled(Container)`
    max-width: 1400px;
`;

const BoxImgs = styled(Box)`
  display: flex;
  justify-content: space-around;
  align-items: center;

  a {
    color: ${({ theme }) => theme.text};
    font-size: 1.15rem;
    font-weight: lighter;
  }

  @media screen and (max-width: 1280px) {
    justify-content: center;
    flex-direction: column;
  }
`;

export const ImgShapes = styled.img`
    width: 100%;
    height: 320px;
    padding-right: 24px;

    @media screen and (max-width: 1280px) {
        width: 230px;
        height: 230px;
        padding: 0 2%;
        margin: 16px 0;
    }
`;

export default function Shapes() {
  return (
    <Box>
      <ContainerShapes>
        <TitleContentSections>
          Dá para ter um corpo bonito na calistenia?
        </TitleContentSections>
        <BoxImgs>
          <figure>
            <ImgShapes src={verissimo} alt="Shape de Verissimo" />
            <figcaption>
              <a target="__blank" href="https://www.instagram.com/verissimotreinador/">@verissimotreinador</a>
            </figcaption>
          </figure>
          <figure>
            <ImgShapes src={pinho} alt="Shape de Pinho" />
            <figcaption>
              <a target="__blank" href="https://www.instagram.com/pinho.calistenia/">@pinho.calistenia</a>
            </figcaption>
          </figure>
          <figure>
            <ImgShapes src={luizMesquita} alt="Shape de Luiz Mesquita" />
            <figcaption>
              <a target="__blank" href="https://www.instagram.com/luizomesquita/">@luizomesquita</a>
            </figcaption>
          </figure>
        </BoxImgs>
      </ContainerShapes>
    </Box>
  );
}
