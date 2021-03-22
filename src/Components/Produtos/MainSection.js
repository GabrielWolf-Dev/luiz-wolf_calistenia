import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import {
  Box,
  Container,
  TitleContentSections,
  SectionContent,
  DefaultParagraph,
  ImgSections,
} from '../UI';
import ExerciseBenefitLight from '../../assets/svg/exerciseBenefitLight.svg';
import ExerciseBenefitDark from '../../assets/svg/exerciseBenefitDark.svg';

const BoxMSection = styled(Box)`
    margin: 128px 0 48px 0;
`;

const ContainerMSection = styled(Container)`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 1280px) {
        justify-content: center;
        flex-direction: column;
    }
`;

const ListProblems = styled.ul`
    text-align: left;
    list-style-type: circle;
    list-style-position: inside;
`;

const ItemList = styled.li`
    font-size: 1.15rem;
    font-weight: 400;
    padding: 8px 2%;
    color: ${({ theme }) => theme.text};

    @media screen and (max-width: 1280px) {
        font-size: 1rem;
    }
`;

const AttentionParagraph = styled(DefaultParagraph)`
    background-color: ${({ theme }) => theme.flashyColor};
    padding: 24px;
    margin-top: 16px;
    border-radius: 12px;
`;

export default function MainSection({ theme }) {
  return (
    <BoxMSection>
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
        Produtos
      </TitleContentSections>
      <ContainerMSection>
        <SectionContent
          as={motion.section}
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
        >
          <DefaultParagraph>
            Como você eu também me identificava com esses problemas...
          </DefaultParagraph>
          <ListProblems>
            <ItemList>
              “Não sei por onde começar...”
            </ItemList>
            <ItemList>
              “Não tenho mais tempo para treinar...”
            </ItemList>
            <ItemList>
              “Não tenho tempo para estudar sobre...”
            </ItemList>
            <ItemList>
              “Parece que nada funciona para mim...”
            </ItemList>
            <ItemList>
              “Não consigo mais evoluir na calistenia...”
            </ItemList>
            <ItemList>
              “Sinto que estou treinando errado...”
            </ItemList>
            <ItemList>
              “Estou sem dinheiro para pagar uma academia ou um personal... “
            </ItemList>
          </ListProblems>
          <AttentionParagraph>
            Por isso crie essa página! Aqui você conseguirá
            alcançar todos os seus objetivos de maneira
            simples e 100% segura, e o melhor, com um preço totalmente acessível.
            E se você não gostar do produto tem uma garantia de até 7 dias
            e seu dinheiro volta para você!
          </AttentionParagraph>
        </SectionContent>
        {
          theme ? (
            <ImgSections
              src={ExerciseBenefitLight}
              alt="Ilustração de um treinador mostrando um painel sobre o nível de atividade física de um indivíduo"
              as={motion.img}
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
            />
          )
            : (
              <ImgSections
                src={ExerciseBenefitDark}
                alt="Ilustração de um treinador mostrando um painel sobre o nível de atividade física de um indivíduo"
                as={motion.img}
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
              />
            )
        }
      </ContainerMSection>
    </BoxMSection>
  );
}
