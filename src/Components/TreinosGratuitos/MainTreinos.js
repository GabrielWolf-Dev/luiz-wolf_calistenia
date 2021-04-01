import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import {
  Box,
  ContainerFlex,
  ImgSections,
  TitleContentSections,
  DefaultParagraph,
  SectionContent,
} from '../UI';
import playlistTrainLight from '../../assets/svg/playlistTrainLight.svg';
import playlistTrainDark from '../../assets/svg/playlistTrainDark.svg';

const BoxMTreinos = styled(Box)`
    margin: 128px 0 48px 0;
`;

export default function MainTreinos({ theme }) {
  return (
    <BoxMTreinos id="Sobre">
      <TitleContentSections
        as={motion.h2}
        variants={{
          show: { opacity: 1 },
          hidden: { opacity: 0 },
        }}
        transition={{ duration: 0.8 }}
        initial="hidden"
        animate="show"
      >
        Treinos Gratuitos
      </TitleContentSections>
      <ContainerFlex>
        {
                theme ? (
                  <ImgSections
                    src={playlistTrainLight}
                    alt="Mulher acompanhando um treino de um serviço online"
                    as={motion.img}
                    variants={{
                      show: { opacity: 1, x: 0 },
                      hidden: { opacity: 0, x: -60 },
                    }}
                    transition={{
                      duration: 0.6,
                      delay: 0.8,
                    }}
                    initial="hidden"
                    animate="show"
                  />
                )
                  : (
                    <ImgSections
                      src={playlistTrainDark}
                      alt="Mulher acompanhando um treino de um serviço online"
                    />
                  )
            }
        <SectionContent>
          <DefaultParagraph
            as={motion.p}
            variants={{
              show: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: 60 },
            }}
            transition={{
              duration: 0.6,
              delay: 0.8,
            }}
            initial="hidden"
            animate="show"
          >
            Aqui você terá acesso a alguns treinos totalmente eficazes, desde o básico até o
            avançado, com o uso mínimo de equipamentos e alguns com uso de equipamentos também,
            conseguindo trabalhar qualquer parte do seu corpo de maneira eficiente.
          </DefaultParagraph>
          <DefaultParagraph
            as={motion.p}
            variants={{
              show: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: 60 },
            }}
            transition={{
              duration: 0.6,
              delay: 0.8,
            }}
            initial="hidden"
            animate="show"
          >
            Se você quiser mais treinos e dicas é só me seguir no instagram
            {' '}
            <a
              style={{
                fontSize: '1.4rem',
                fontWeight: '400',
                padding: '16px 2%',
                color: '#333333',
              }}
              href="https://www.instagram.com/luizmiguelwolf/"
            >
              @luizmiguelwolf
            </a>
            ,
            lá você também terá mais interação comigo.
          </DefaultParagraph>
        </SectionContent>
      </ContainerFlex>
    </BoxMTreinos>
  );
}
