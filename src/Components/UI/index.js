import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Container = styled.div`
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    text-align: center;
`;

export const Box = styled.section`
    width: 100%;
    margin: 48px 0;
`;

export const ImgSections = styled.img`
    width: 100%;
    max-width: 500px;
    height: 100%;
`;

export const ImgShapes = styled.img`
    width: 100%;
    height: 320px;
`;

export const ImgCircle = styled.img`
    width: 100%;
    max-width: 250px;
    height: 250px;
    display: inline-block;
`;

export const IconAdjust = styled(FontAwesomeIcon)`
    color: ${({ theme }) => theme.menuFooter_Content};
    font-size: 2.7rem;
    cursor: pointer;
    transition: all ease 0.3s;

    :hover{
        color: ${({ theme }) => theme.menuFooter_ContentHover};
    }
`;

export const SectionContent = styled.div`
    width: 100%;
    max-width: 700px;
    padding: 48px 2%;
`;

export const TitleContentSections = styled.h2`
    font-size: 1.75rem;
    font-weight: 500;
    text-align: center;
    color: ${({ theme }) => theme.text};
`;

export const DefaultParagraph = styled.p`
    font-size: 1.4rem;
    font-weight: 400;
    padding: 16px 2%;
    color: ${({ theme }) => theme.text};
    text-align: left;
`;
