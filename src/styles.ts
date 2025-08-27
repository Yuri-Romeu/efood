import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

export const Cores = {
     salmao: '#E66767',
     semiBranco: '#FFF8F2',
     branco: '#FFFFFF',
     bege: '#FFEBD9',
};

export const GlobalCSS = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    list-style: none;
}

body {
    background-color: ${Cores.semiBranco};
    color: ${Cores.salmao}
}

.container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }

`;
