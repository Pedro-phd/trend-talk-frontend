import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  src: url('../fonts/poppins-v15-latin-regular.eot');
  src: local(''),
       url('../fonts/poppins-v15-latin-regular.eot?#iefix') format('embedded-opentype'), 
       url('../fonts/poppins-v15-latin-regular.woff2') format('woff2'), 
       url('../fonts/poppins-v15-latin-regular.woff') format('woff'),
       url('../fonts/poppins-v15-latin-regular.ttf') format('truetype'), 
       url('../fonts/poppins-v15-latin-regular.svg#Poppins') format('svg'); 
}
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  html, body, #__next {
    height: 100%;
  }

  body {
    font-family: ${(props) => props.theme.fonts.main};
  }
`

export default GlobalStyles
