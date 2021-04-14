import React from 'react';
import styled from 'styled-components';

import {
  BoxMargin,
} from '../UI';

const Contribution = styled.div`
  padding: 48px 2%;

  li {
      margin: 16px 0;
  }

  li div {
    color: ${({ theme }) => theme.text};
    font-size: 1.13rem;
    font-weight: 400;
  }

  a {
      font-size: 1.13rem;
      color: ${({ theme }) => theme.text};
      font-weight: 400;
      transition: all ease 0.3s;
  }

  a:hover {
      color: ${({ theme }) => theme.flashyColor};
  }

  span {
    margin: 0 4px;
  }
`;

export default function Credits() {
  return (
    <BoxMargin>
      <Contribution id="Sobre">
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
    </BoxMargin>
  );
}
