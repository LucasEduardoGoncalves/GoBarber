import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

    :root {
        --orange: #ff9000;
        --white: #f4ede8;
        --gray: #999591;
        --gray-hard: #666360;
        
        --shape: #3E3B47;
        --black-medium: #28262E;
        --background:  #312E38;
        --inputs: #232129;
    }

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html {
        @media(max-width: 1080px){
            font-size: 93.75%;
        }
        @media(max-width: 720px){
            font-size: 87.5%;
        }
    }   

    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Roboto', serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
        color: var(--white);
    }

    button {
        cursor: pointer;
    }
    
    [disabled] {
        opacity: 0.6; 
        cursor: not-allowed;
    }
`;