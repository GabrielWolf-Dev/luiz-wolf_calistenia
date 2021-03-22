import React from 'react';
import styled from 'styled-components';
import { motion, useViewportScroll } from 'framer-motion';

import {
  Box,
  Container,
  TitleContentSections,
  DefaultButton,
  ImgSections,
  NotFoundMessage,
} from '../UI';
import voidLight from '../../assets/svg/voidLight.svg';
import voidDark from '../../assets/svg/voidDark.svg';

const ContainerListEbooks = styled(Container)`
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
`;

const BoxEbook = styled.div`
    width: 100%;
    max-width: 400px;
    background-color: ${({ theme }) => theme.bgBoxProduct};
    border-radius: 12px;
    text-align: center;
    margin-top: 32px;

    a {
        color: ${({ theme }) => theme.text};
    }
`;

const ImgEbook = styled.img`
    width: 100%;
    max-width: 280px;
    height: 280px;
    background-color: black;
    display: inline-block;
    margin: 24px 0 16px 0;
    border-radius: 12px;
`;

const BtnEbook = styled(DefaultButton)`
    margin: 32px 0;
`;

export default function ListEbooks({ db, theme }) {
  const { scrollYProgress } = useViewportScroll();
  return (
    <Box>
      <ContainerListEbooks>
        {
            db.existsDatas === true
              ? db.ebooks.map((ebook) => (
                <BoxEbook>
                  <ImgEbook src={ebook.img} alt={ebook.descriptionImgEbook} />
                  <TitleContentSections>{ ebook.name }</TitleContentSections>
                  <BtnEbook>
                    <a href={ebook.urlPdf}>Acessar</a>
                  </BtnEbook>
                </BoxEbook>
              ))
              : (
                <Container
                  as={motion.div}
                  style={{ scale: scrollYProgress }}
                >
                  {
                  theme ? <ImgSections src={voidLight} alt="Ilustração de uma pessoa em um local vazio" />
                    : <ImgSections src={voidDark} alt="Ilustração de uma pessoa em um local vazio" />
                }
                  <NotFoundMessage>
                    No momento, não há E-books.
                  </NotFoundMessage>
                </Container>
              )
        }
      </ContainerListEbooks>
    </Box>
  );
}
