import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Container = styled.div`
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
`;

export const IconAdjust = styled(FontAwesomeIcon)`
    color: white;
    font-size: 3rem;
    cursor: pointer;
    transition: all ease 0.3s;

    :hover{
        color: ${({ theme }) => theme.flashyColor};
    } 
`;
