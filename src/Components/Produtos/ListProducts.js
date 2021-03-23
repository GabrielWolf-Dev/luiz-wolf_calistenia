import React from 'react';
import styled from 'styled-components';
import { motion, useViewportScroll, useTransform } from 'framer-motion';

import {
  Box,
  Container,
  TitleContentSections,
  DefaultParagraph,
  DefaultButton,
  ImgSections,
  NotFoundMessage,
} from '../UI';
import voidLight from '../../assets/svg/voidLight.svg';
import voidDark from '../../assets/svg/voidDark.svg';

const ContainerListProducts = styled(Container)`
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
`;

const BoxProduct = styled.div`
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

const ImgProduct = styled.img`
    width: 100%;
    max-width: 280px;
    height: 280px;
    background-color: black;
    display: inline-block;
    margin: 24px 0 16px 0;
    border-radius: 12px;
`;

const Price = styled(DefaultParagraph)`
    text-align: center;
    padding-top: 8px;
    padding: 0;
`;

const BtnProduct = styled(DefaultButton)`
    margin: 32px 0;
`;

export default function ListProducts({ db, theme }) {
  const { scrollYProgress } = useViewportScroll();
  const scaleValue = useTransform(scrollYProgress, (value) => value / 1.1);
  return (
    <Box>
      <ContainerListProducts>
        {
            db.existsDatas === true
              ? db.products.map((product) => (
                <BoxProduct>
                  <ImgProduct src={product.img} alt={product.descriptionImgProduct} />
                  <TitleContentSections>{ product.name }</TitleContentSections>
                  <Price>{ product.price }</Price>
                  <BtnProduct>
                    <a href={product.urlProduct}>Acessar</a>
                  </BtnProduct>
                </BoxProduct>
              ))
              : (
                <Container
                  as={motion.div}
                  style={{ scale: scaleValue }}
                >
                  {
                        theme ? <ImgSections src={voidLight} alt="Ilustração de uma pessoa em um local vazio" />
                          : <ImgSections src={voidDark} alt="Ilustração de uma pessoa em um local vazio" />
                    }
                  <NotFoundMessage>
                    No momento, não há produtos.
                  </NotFoundMessage>
                </Container>
              )
        }
      </ContainerListProducts>
    </Box>
  );
}
