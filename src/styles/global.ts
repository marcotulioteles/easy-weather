import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body, 
  input, 
  textarea, 
  button {
    font-family: ${theme.FONTS.TEXT}, 'Arial', 'sans-serif';
    font-weight: 400;
    background-color: ${theme.COLORS.APP_BACKGROUND};
    color: ${theme.COLORS.TEXT}
  }

  h1, 
  h2, 
  h3,
  h4,
  h5,
  h6,
  strong  {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;