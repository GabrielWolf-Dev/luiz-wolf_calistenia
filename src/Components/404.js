import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import {
  Container,
  ImgSections,
  NotFoundMessage,
} from './UI';
import error404Light from '../assets/svg/404Light.svg';
import error404Dark from '../assets/svg/404Dark.svg';

const ImgError = styled(ImgSections)`
    max-width: 620px;
    margin: 130px 0 48px 0;
`;

const LinkHome = styled(Link)`
    font-size: 1.4rem;
    text-align: center;
    color: ${({ theme }) => theme.text};
    padding: 0 2%;
    margin: 32px 0 48px 0;
    transition: all ease 0.3s;

    :hover {
        color: ${({ theme }) => theme.flashyColor};
    }
`;

export default function Error404({ theme }) {
  return (
    <Container>
      {
          theme ? (
            <ImgError
              as={motion.img}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6 }}
              src={error404Light}
              alt="Ilustração de erro do tipo 404(Página não encontrada)"
            />
          )
            : (
              <ImgError
                as={motion.img}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6 }}
                src={error404Dark}
                alt="Ilustração de erro do tipo 404(Página não encontrada)"
              />
            )
      }
      <NotFoundMessage>Erro! Essa página não existe :(</NotFoundMessage>
      <LinkHome to="/">Voltar para a página inicial</LinkHome>
    </Container>
  );
}
