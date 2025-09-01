import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

type Props = {
     tipoCards?: 'principal' | 'perfil';
};

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

`;

export const Principal = styled.main`
     display: flex;
     flex-direction: column;
     align-items: center;
     margin-bottom: 60px;
`;

export const Cards = styled.div<Props>`
     display: grid;
     grid-template-columns: ${props =>
          props.tipoCards === 'principal' ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)'};
     gap: 60px;
     padding: 60px;
`;
