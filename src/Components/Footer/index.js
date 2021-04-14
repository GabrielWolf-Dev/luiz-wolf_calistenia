import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import { Container } from '../UI';
import { cianDark, white } from '../UI/variables';

const FooterBox = styled.footer`
    width: 100%;
    padding: 20px 2%;
    background-color: ${cianDark};
    margin-top: 48px;
`;

const ContainerFooter = styled(Container)`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 1280px) {
      justify-content: center;
      flex-direction: column;
    }
`;

const ContactDev = styled.div`
    p {
        font-size: 1.13rem;
        font-weight: 400;
        color: ${white};
        display: inline-block;
        margin: 0 24px 16px 0;
        vertical-align: middle;
    }

    a {
        font-size: 2rem;
        color: ${white};
        transition: all ease 0.3s;
        margin: 0 16px;
    }

    a:hover {
        color: ${({ theme }) => theme.flashyColor};
    }
`;

const CreditsLink = styled(Link)`
    font-size: 1.13rem;
    color: ${white};
    font-weight: 400;
    transition: all ease 0.3s;

    &:hover{
        color: ${({ theme }) => theme.flashyColor};
    }
`;

export default function Footer() {
  return (
    <FooterBox id="Contato">
      <ContainerFooter>
        <ContactDev>
          <p>
            Website desenvolvido por
            Gabriel Wolf
          </p>
          <a target="__blank" href="https://github.com/GabrielWolf-Dev">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a target="__blank" href="https://www.linkedin.com/in/gabriel-wolf-frontend/">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </ContactDev>
        <CreditsLink to="/creditos">Creditos</CreditsLink>
      </ContainerFooter>
    </FooterBox>
  );
}
