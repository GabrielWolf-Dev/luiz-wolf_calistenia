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
import killyan from '../../assets/img/killyan.png';

const shapes = [
  {
    id: 0,
    alt: 'Shape de Verissimo',
    img: verissimo,
    link: 'https://www.instagram.com/verissimotreinador/',
    insta: '@verissimotreinador',
  },
  {
    id: 1,
    alt: 'Shape de Pinho',
    img: pinho,
    link: 'https://www.instagram.com/pinho.calistenia/',
    insta: '@pinho.calistenia',
  },
  {
    id: 2,
    alt: 'Shape de Luiz Mesquita',
    img: luizMesquita,
    link: 'https://www.instagram.com/luizomesquita/',
    insta: '@luizomesquita',
  },
  {
    id: 3,
    alt: 'Shape de Killyan',
    img: killyan,
    link: 'https://www.instagram.com/killyanscherk/',
    insta: '@Killyanscherk',
  },
];

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
          {
            shapes.map((shape) => (
              <figure key={shape.id}>
                <ImgShapes src={shape.img} alt={shape.alt} />
                <figcaption>
                  <a target="__blank" href={shape.link}>{shape.insta}</a>
                </figcaption>
              </figure>
            ))
          }
        </BoxImgs>
      </ContainerShapes>
    </Box>
  );
}
