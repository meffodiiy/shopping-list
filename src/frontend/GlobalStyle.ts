import { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: Tahoma, sans-serif;
    
    @media (max-width: 800px) {
      cursor: unset;
    }
  }
`

export default GlobalStyle
