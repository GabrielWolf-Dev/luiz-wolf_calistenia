import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import { Container } from '../UI';

const FooterBox = styled.footer`
    width: 100%;
    padding: 20px 2%;
    background-color: ${({ theme }) => theme.menuFooter};
    margin-top: 48px;
`;

const ContainerFooter = styled(Container)`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const ContactDev = styled.div`
    p {
        font-size: 1.13rem;
        font-weight: 400;
        color: ${({ theme }) => theme.menuFooter_Content};
    }

    a {
        font-size: 2rem;
        color: ${({ theme }) => theme.menuFooter_Content};
        transition: all ease 0.3s;
    }

    a:hover {
        color: ${({ theme }) => theme.menuFooter_ContentHover};
    }
`;

const Contribution = styled.div`
  li {
      margin: 16px 0;
  }

  li div {
    color: ${({ theme }) => theme.menuFooter_Content};
    font-size: 1.13rem;
    font-weight: 400;
  }

  a {
      font-size: 1.13rem;
      color: ${({ theme }) => theme.menuFooter_Content};
      font-weight: 400;
      transition: all ease 0.3s;
  }

  a:hover {
      color: ${({ theme }) => theme.menuFooter_ContentHover};
  }

  span {
    margin: 0 4px;
  }
`;

export default function Footer() {
  return (
    <FooterBox>
      <ContainerFooter>
        <ContactDev>
          <p>
            Website desenvolvido por
            Gabriel Wolf
          </p>
          <a target="__blank" href="https://github.com/GabrielWolf-Dev">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </ContactDev>
        <Contribution>
          <ul>
            <li><a target="__blank" href="https://undraw.co">Vetores utilizados no undraw</a></li>
            <li><a target="__blank" href="https://www.pexels.com/pt-br/foto/ativo-movimentado-atividade-acao-4048236/">Foto de Niko Twisty no Pexels</a></li>
            <li><a target="__blank" href="https://www.pexels.com/pt-br/foto/black-dumbbell-lot-260352/">Foto de Pixabay no Pexels Halteres</a></li>
            <li><a target="__blank" href="https://fontawesome.com/icons?d=gallery&p=2">Ícones utilizados no Font Awesome</a></li>
            <li>
              <div>
                Icons made by
                <span><a target="__blank" href="https://www.flaticon.com/authors/icongeek26" title="Icongeek26">Icongeek26</a></span>
                {' '}
                from
                <span><a target="__blank" href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></span>
              </div>
            </li>
          </ul>
        </Contribution>
      </ContainerFooter>
    </FooterBox>
  );
}
