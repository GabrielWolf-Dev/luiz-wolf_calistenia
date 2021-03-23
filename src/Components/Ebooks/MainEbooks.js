import React from 'react';
import { motion } from 'framer-motion';

import {
  BoxMargin,
  ContainerFlex,
  TitleContentSections,
  ImgSections,
  SectionContent,
  DefaultParagraph,
} from '../UI';
import womanTrainingLight from '../../assets/svg/womanTraningLight.svg';
import womanTrainingDark from '../../assets/svg/womanTraningDark.svg';

export default function MainEbooks({ theme }) {
  return (
    <BoxMargin id="Sobre">
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
      <ContainerFlex>
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
      </ContainerFlex>
    </BoxMargin>
  );
}
