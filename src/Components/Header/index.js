import React, { useState } from 'react';
import styled from 'styled-components';
import { faAdjust, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import { Icons, Box } from '../UI';
import logoLight from '../../assets/img/logoLight.png';
import logoDark from '../../assets/img/logoDark.png';
import { black, cianDark, white } from '../UI/variables';

const BgHeader = styled.header`
  width: 100%;
  padding: 20px 2%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${cianDark};
  box-shadow: 2px 2px 20px #333333;
  margin-bottom: 48px;
`;

const IconAdjust = styled(Icons)`
  color: ${white};
  background-color: ${cianDark};

  :hover {
    color: ${({ theme }) => theme.flashyColor};
  }
`;

const Menu = styled.nav`
  width: 65%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  
  li {
    display: inline-block;
    margin: 0 24px;
  }

  @media screen and (max-width: 1280px) {
    display: flex;
    justify-content: flex-end;
  }
`;

const IconBarMenu = styled(Icons)`
  color: ${white};
  background-color: ${cianDark};
  display: none;

  :hover {
    color: ${({ theme }) => theme.flashyColor};
  }

  @media screen and (max-width: 1280px) {
    display: block;
    margin: 0 24px;
  }
`;

const MenuDesktop = styled.ul`
  @media screen and (max-width: 1280px) {
    display: none;
  }
`;

const MenuMobile = styled.ul`
  width: 0;
  max-width: 450px;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  background-color: ${({ theme }) => theme.mainBg};
  box-shadow: 5px 5px 20px #333333;
  opacity: 0;
  transition: 0.75s;

  li {
    display: block;
    margin: 24px 0;
    padding-bottom: 24px;
    padding-left: 24px;
    border-bottom: 2px solid ${({ theme }) => theme.text};
  }

  &.openMenu {
    opacity: 1;
    width: 100%;
  }
`;

const BoxIconCloseMenu = styled(Box)`
  margin: 0;
  padding: 20px 2%;
  background-color: ${({ theme }) => theme.flashyColor};
`;

const IconCloseMenu = styled(Icons)`
  color: ${black};
  margin-left: 24px;

  :hover {
    color: ${black};
  }
`;

const MenuLinks = styled(Link)`
  color: ${white};
  font-size: 1.38rem;
  transition: all ease 0.3s;
    
  :hover {
    color: ${({ theme }) => theme.flashyColor};
  }

  @media screen and (max-width: 1280px) {
    text-decoration: none;
    color: ${({ theme }) => theme.text};
  }
`;

const Btn = styled.button`
  border: 0;
  background-color: ${({ theme }) => theme.menuFooter};
`;

export default function Header({ toggleTheme, theme }) {
  const [open, setOpen] = useState(false);

  function toggleMenu() {
    setOpen(!open);
  }

  return (
    <BgHeader>
      <MenuLinks to="/"><img alt="Iustração de um lobo como uma logo do site" src={theme ? logoLight : logoDark} /></MenuLinks>
      <Menu>
        <Btn aria-label="Trocar de tema" onKeyUp={(event) => (event.code === 'Enter' ? toggleTheme() : null)}>
          <IconAdjust onClick={toggleTheme} icon={faAdjust} />
        </Btn>
        <IconBarMenu onClick={toggleMenu} aria-label="Botão para abrir o menu de navegação" icon={faBars} />
        <MenuDesktop>
          <li><MenuLinks to="#sobre">Sobre</MenuLinks></li>
          <li><MenuLinks to="/treinos-gratuitos">Treinos Gratuitos</MenuLinks></li>
          <li><MenuLinks to="/produtos">Produtos</MenuLinks></li>
          <li><MenuLinks to="/e-books">E-Books</MenuLinks></li>
          <li><MenuLinks to="#Contato">Contato</MenuLinks></li>
        </MenuDesktop>
        <MenuMobile className={open ? 'openMenu' : ''}>
          <BoxIconCloseMenu>
            <IconCloseMenu icon={faTimes} onClick={toggleMenu} />
          </BoxIconCloseMenu>
          <li><MenuLinks to="#sobre">Sobre</MenuLinks></li>
          <li><MenuLinks to="/treinos-gratuitos">Treinos Gratuitos</MenuLinks></li>
          <li><MenuLinks to="/produtos">Produtos</MenuLinks></li>
          <li><MenuLinks to="/e-books">E-Books</MenuLinks></li>
          <li><MenuLinks to="#Contato">Contato</MenuLinks></li>
        </MenuMobile>
      </Menu>
    </BgHeader>
  );
}
