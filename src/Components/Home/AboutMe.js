import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

import imgLuiz from '../../assets/img/imgLuiz.png';
import {
  Container,
  ImgCircle,
  SectionContent,
  TitleContentSections,
  DefaultParagraph,
  DefaultButton,
  Icons,
  Line,
} from '../UI';

const ContainerAboutMe = styled(Container)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 48px auto;

    .instaLinkMobile {
        display: none;
    }

    @media screen and (max-width: 1280px) {
      justify-content: center;
      flex-direction: column;

      .instaLinkDesktop {
        display: none;
      }

      .instaLinkMobile {
        display: block;
      }
    }
`;

const FigCaptionImg = styled.figcaption`
  width: 100%;
  text-align: right;
`;

const ImgLuiz = styled(ImgCircle)`
    max-width: 300px;
    height: 300px;
    margin: 0 4%;
`;

const IconInsta = styled(Icons)`
    margin-bottom: 8px;
    vertical-align: middle;
`;

export default function AboutMe() {
  return (
    <>
      <Line />
      <ContainerAboutMe>
        <figure>
          <ImgLuiz src={imgLuiz} alt="Foto do Luiz Miguel andando numa praça" />
          <FigCaptionImg>
            <a className="instaLinkMobile" target="__blank" href="https://www.instagram.com/luizmiguelwolf/">
              <IconInsta icon={faInstagram} />
            </a>
          </FigCaptionImg>
        </figure>
        <SectionContent>
          <TitleContentSections>Quem sou eu?</TitleContentSections>
          <DefaultParagraph>
            Meu nome é Luiz Miguel Wolf , tenho 14 anos e treino calistenia há 4 anos,
            isso mesmo começei a treinar aos 10 anos de idade!
          </DefaultParagraph>
          <DefaultParagraph>
            Sempre gostei de esportes em geral,
            mas um dia um amigo me levou para fazer um "treininho"
            no parque e a partir disso me apaixonei pelo esporte.
            Começei a pesquisar e a estudar muito sobre a Calistenia e o meio Fitness,
            pois meu foco era principalmente alcançar um corpo bonito,
            conseguindo ao mesmo tempo ter um bom domínio corporal
            e claro sempre visando saúde e longevidade no esporte.
          </DefaultParagraph>
          <Link to="/treinos-gratuitos">
            <DefaultButton>Treinos</DefaultButton>
          </Link>
          <Link to="/produtos">
            <DefaultButton>Produtos</DefaultButton>
          </Link>
          <a className="instaLinkDesktop" target="__blank" href="https://www.instagram.com/luizmiguelwolf/">
            <IconInsta icon={faInstagram} />
          </a>
        </SectionContent>
      </ContainerAboutMe>
    </>
  );
}
