import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Noto Sans JP', sans-serif;
        font-size: 16px;
    }
    
    html, body {
        height: 100%;
    }

    :root {
        font-size: 16px;

        @media screen and (max-width: 1280px) {
            font-size: 13px;
        }
    }

    body {
        background-color: ${({ theme }) => theme.mainBg};
    }

    ul {
        list-style-type: none;
    }
`;

export default GlobalStyle;
