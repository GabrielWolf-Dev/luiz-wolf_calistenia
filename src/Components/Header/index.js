import React from 'react';
import styled from 'styled-components';
import { faAdjust } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import { Icons } from '../UI';
import logoLight from '../../assets/img/logoLight.png';
import logoDark from '../../assets/img/logoDark.png';

const BgHeader = styled.header`
  width: 100%;
  padding: 20px 2%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.menuFooter};
  box-shadow: 2px 2px 20px #333333;
  margin-bottom: 48px;
`;

const IconAdjust = styled(Icons)`
  color: ${({ theme }) => theme.menuFooter_Content};

  :hover {
    color: ${({ theme }) => theme.menuFooter_ContentHover};
  }
`;

const Menu = styled.nav`
  width: 50%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  
  li {
    display: inline-block;
    margin: 0 24px;
  }
`;

const MenuLinks = styled(Link)`
  color: ${({ theme }) => theme.menuFooter_Content};
  font-size: 1.38rem;
  transition: all ease 0.3s;
    
  :hover {
    color: ${({ theme }) => theme.menuFooter_ContentHover};
  }
`;

const BtnTheme = styled.button`
  border: 0;
  background-color: ${({ theme }) => theme.menuFooter};
`;

export default function Header({ toggleTheme, theme }) {
  return (
    <BgHeader>
      <MenuLinks to="/"><img alt="Iustração de um lobo como uma logo do site" src={theme ? logoLight : logoDark} /></MenuLinks>
      <Menu>
        <BtnTheme aria-label="Trocar de tema" onKeyUp={(event) => (event.code === 'Enter' ? toggleTheme() : null)}>
          <IconAdjust onClick={toggleTheme} icon={faAdjust} />
        </BtnTheme>
        <ul>
          <li><MenuLinks to="#sobre">Sobre</MenuLinks></li>
          <li><MenuLinks to="/treinos-gratuitos">Treinos Gratuitos</MenuLinks></li>
          <li><MenuLinks to="/produtos">Produtos</MenuLinks></li>
          <li><MenuLinks to="/e-books">E-Books</MenuLinks></li>
          <li><MenuLinks to="#Contato">Contato</MenuLinks></li>
        </ul>
      </Menu>
    </BgHeader>
  );
}
