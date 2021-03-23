import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Container = styled.div`
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    text-align: center;
`;

export const ContainerFlex = styled.div`
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
    text-align: center;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 1280px) {
        justify-content: center;
        flex-direction: column;
    }
`;

export const Box = styled.section`
    width: 100%;
    margin: 48px 0;
    padding: 0 4%;
    text-align: center;
`;

export const BoxMargin = styled(Box)`
    margin: 128px 0 48px 0;
`;

export const ImgSections = styled.img`
    width: 100%;
    max-width: 500px;
    height: 100%;

    @media screen and (max-width: 1280px) {
        max-width: 300px;
        height: 400px;
        border-radius: 12px;
        margin-top: 48px;
    }
`;

export const ImgCircle = styled.img`
    width: 100%;
    max-width: 250px;
    height: 250px;
    display: inline-block;

    @media screen and (max-width: 1280px) {
        max-width: 170px;
        height: 170px; 
    }
`;

export const Icons = styled(FontAwesomeIcon)`
    font-size: 2.7rem;
    cursor: pointer;
    transition: all ease 0.3s;
    color: ${({ theme }) => theme.text};

    :hover {
        color: ${({ theme }) => theme.flashyColor};
    }
`;

export const SectionContent = styled.div`
    width: 100%;
    max-width: 700px;
    padding: 48px 2%;

    @media screen and (max-width: 1280px) {
        max-width: 400px;
    }
`;

export const TitleContentSections = styled.h2`
    font-size: 1.75rem;
    font-weight: 500;
    text-align: center;
    color: ${({ theme }) => theme.text};
    padding: 0 2%;
`;

export const DefaultParagraph = styled.p`
    font-size: 1.4rem;
    font-weight: 400;
    padding: 16px 2%;
    color: ${({ theme }) => theme.text};
    text-align: left;
`;

export const DefaultButton = styled.button`
    width: 100%;
    max-width: 160px;
    height: 42px;
    border: 0;
    border-radius: 12px;
    background-color: ${({ theme }) => theme.flashyColor};  
    color: #333333;
    margin: 16px 24px;
    cursor: pointer;
`;

export const Line = styled.hr`
    width: 80%;
    margin: 96px auto 32px auto;
    border: 2px solid ${({ theme }) => theme.flashyColor};
    border-radius: 50%;
`;

export const NotFoundMessage = styled.h3`
    font-size: 1.65rem;
    font-weight: 500;
    text-align: center;
    color: ${({ theme }) => theme.text};
    padding: 0 2%;
    margin: 32px 0 48px 0;
`;
