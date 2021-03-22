import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import {
  Box,
  Container,
  TitleContentSections,
  ImgSections,
  SectionContent,
  DefaultParagraph,
} from '../UI';
import womanTrainingLight from '../../assets/svg/womanTraningLight.svg';
import womanTrainingDark from '../../assets/svg/womanTraningDark.svg';

const BoxEbooks = styled(Box)`
    margin: 128px 0 48px 0;
`;

const ContainerEbooks = styled(Container)`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 1280px) {
        justify-content: center;
        flex-direction: column;
    }
`;

export default function MainEbooks({ theme }) {
  return (
    <BoxEbooks id="Sobre">
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
        E-books
      </TitleContentSections>
      <ContainerEbooks>
        {
            theme ? (
              <ImgSections
                src={womanTrainingLight}
                alt="Ilustração de duas mulheres treinando"
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
                  src={womanTrainingDark}
                  alt="Ilustração de duas mulheres treinando"
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
        }
        <SectionContent
          as={motion.section}
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
          <DefaultParagraph>
            Aqui irei disponibilizar alguns e-books gratuitos relacionado
            a área da saúde, fitness, calistenia e entre outros para vocês lerem.
          </DefaultParagraph>
        </SectionContent>
      </ContainerEbooks>
    </BoxEbooks>
  );
}
