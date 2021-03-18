import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Noto Sans', sans-serif;
        font-size: 16px;
    }
    
    html, body {
        height: 100%;
    }

    ul {
        list-style-type: none;
    }
`;

export default GlobalStyle;
