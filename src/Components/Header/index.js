import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
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
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
`;

const IconAdjust = styled(Icons)`
  width: 42px;
  height: 42px;
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
  a {
    color: ${white};
    font-size: 1.38rem;
    transition: all ease 0.3s;
  }
  
  a:hover {
    color: ${({ theme }) => theme.flashyColor};
  }

  @media screen and (max-width: 1280px) {
    display: none;
    text-decoration: none;
    color: ${({ theme }) => theme.text};
  }
`;

const MenuMobile = styled.ul`
  width: 100%;
  max-width: 450px;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  background-color: ${({ theme }) => theme.mainBg};
  box-shadow: 5px 5px 20px #333333;
  z-index: 1;
  opacity: 1;

  a {
    font-size: 1.38rem;
    transition: all ease 0.3s;
    text-decoration: none;
    color: ${({ theme }) => theme.text};
  }
  
  a:hover {
    color: ${({ theme }) => theme.flashyColor};
  }

  li {
    display: block;
    margin: 24px 0;
    padding-bottom: 24px;
    padding-left: 24px;
    border-bottom: 2px solid ${({ theme }) => theme.text};
  }

  @media screen and (max-width: 420px) {
    max-width: 100%;
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

const BoxBgMenu = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 0;
  position: fixed;
  top: 0;
  left: 0;
`;

export default function Header({ toggleTheme, theme }) {
  const [open, setOpen] = useState(false);
  const [lastYPosition, setLastYPosition] = useState(0);
  const [showMenu, setShowMenu] = useState(true);

  useEffect(() => {
    function scrollAnimate() {
      const windowY = window.scrollY;
      const scrollUp = windowY < lastYPosition;

      setShowMenu(scrollUp);
      setLastYPosition(windowY);
    }

    window.addEventListener('scroll', scrollAnimate, false);

    return () => window.removeEventListener('scroll', scrollAnimate, false);
  }, [lastYPosition]);

  function toggleMenu() {
    setOpen(!open);
  }

  function toggleSmoothLinks(event) {
    event.preventDefault();
    const tagA = event.target;
    const id = tagA.getAttribute('href');
    const to = document.querySelector(id).offsetTop;

    window.scroll({
      top: to - 80,
      behavior: 'smooth',
    });
  }

  return (
    <BgHeader
      as={motion.header}
      animate={{ opacity: showMenu ? 1 : 0, display: showMenu ? 'flex' : 'none' }}
    >
      <BoxBgMenu
        onClick={toggleMenu}
        as={motion.div}
        variants={{
          show: { width: '100vw', height: '100vh', opacity: 1 },
          hidden: { width: '0vw', height: '100vh', opacity: 0 },
        }}
        transition={{
          duration: 0.5,
        }}
        initial="hidden"
        animate={open === true ? 'show' : 'hidden'}
      />
      <MenuLinks to="/"><img alt="Iustração de um lobo como uma logo do site" src={theme ? logoLight : logoDark} /></MenuLinks>
      <Menu>
        <Btn aria-label="Trocar de tema" onKeyUp={(event) => (event.code === 'Enter' ? toggleTheme() : null)}>
          <IconAdjust onClick={toggleTheme} icon={faAdjust} />
        </Btn>
        <IconBarMenu onClick={toggleMenu} aria-label="Botão para abrir o menu de navegação" icon={faBars} />
        <MenuDesktop>
          <li><a onClick={toggleSmoothLinks} href="#Sobre">Sobre</a></li>
          <li><MenuLinks to="/treinos-gratuitos">Treinos Gratuitos</MenuLinks></li>
          <li><MenuLinks to="/produtos">Produtos</MenuLinks></li>
          <li><MenuLinks to="/e-books">E-Books</MenuLinks></li>
          <li><a onClick={toggleSmoothLinks} href="#Contato">Contato</a></li>
        </MenuDesktop>
        <MenuMobile
          as={motion.nav}
          variants={{
            show: { width: '100%' },
            hidden: { width: '0%' },
          }}
          transition={{
            duration: 0.5,
          }}
          initial="hidden"
          animate={open === true ? 'show' : 'hidden'}
        >
          <BoxIconCloseMenu>
            <IconCloseMenu icon={faTimes} onClick={toggleMenu} />
          </BoxIconCloseMenu>
          <li><a onClick={toggleSmoothLinks} href="#Sobre">Sobre</a></li>
          <li><MenuLinks to="/treinos-gratuitos">Treinos Gratuitos</MenuLinks></li>
          <li><MenuLinks to="/produtos">Produtos</MenuLinks></li>
          <li><MenuLinks to="/e-books">E-Books</MenuLinks></li>
          <li><a onClick={toggleSmoothLinks} href="#Contato">Contato</a></li>
        </MenuMobile>
      </Menu>
    </BgHeader>
  );
}
