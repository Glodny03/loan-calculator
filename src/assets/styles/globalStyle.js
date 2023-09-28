import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

html {
    box-sizing: border-box;
}

*, *::after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
}

body {
    font-family: "Montserrat", sans-serif;

    @media (min-width: 577px) {
        font-size: 16px; /* Adjust for tablets */
    }
}

a, button, span, input, select {
    font-family: 'Montserrat', sans-serif;
}
`;
