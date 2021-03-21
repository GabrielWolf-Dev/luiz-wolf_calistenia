import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';

import imgBanner from '../../assets/img/imgBanner.png';
import { Container, Box, ImgCircle } from '../UI';

const BannerBox = styled(Box)`
  background-color: ${({ theme }) => theme.mainBg};
  margin: 144px 0;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.text};
  margin: 16px 0;
`;

const Phrase = styled.h2`
  font-size: 1.75rem;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;

export default function Banner() {
  return (
    <BannerBox>
      <Container>
        <ImgCircle
          as={motion.img}
          variants={{
            show: { scale: 1, opacity: 1 },
            hidden: { scale: 0, opacity: 0 },
          }}
          transition={{
            duration: 0.5,
          }}
          initial="hidden"
          animate="show"
          src={imgBanner}
          alt="Foto do Luiz fazendo exercício na barra como um banner"
        />
        <Title
          as={motion.h1}
          variants={{
            show: { scale: 1, opacity: 1 },
            hidden: { scale: 0, opacity: 0 },
          }}
          transition={{
            duration: 0.5,
          }}
          initial="hidden"
          animate="show"
        >
          Luiz Wolf Calistenia
        </Title>
        <Phrase
          as={motion.h2}
          variants={{
            show: { y: 0, opacity: 1 },
            hidden: { y: 80, opacity: 0 },
          }}
          transition={{
            duration: 0.5,
            delay: 0.5,
          }}
          initial="hidden"
          animate="show"
        >
          “Transforme seu corpo na sua própria academia”
        </Phrase>
      </Container>
    </BannerBox>
  );
}
