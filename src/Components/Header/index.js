import React from 'react';
import styled from 'styled-components';
import { faAdjust } from '@fortawesome/free-solid-svg-icons';

import { IconAdjust } from '../UI';

const BgHeader = styled.header`
  width: 100%;
  padding: 20px 2%;
  background-color: ${({ theme }) => theme.menu};
`;

export default function Header({ toggleTheme }) {
  return (
    <BgHeader>
      <IconAdjust onClick={toggleTheme} icon={faAdjust} />
    </BgHeader>
  );
}
