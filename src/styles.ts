import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

type Props = {
     tipoCards?: 'principal' | 'perfil';
};

export const Colors = {
     salmon: '#E66767',
     semiWhite: '#FFF8F2',
     white: '#FFFFFF',
     beige: '#FFEBD9',
};

export const Breakpoints = {
     mobile: '480px',
     tablet: '768px',
     desktop: '1024px',
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
    background-color: ${Colors.semiWhite};
    color: ${Colors.salmon}
}

`;

export const Main = styled.main`
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

     @media (max-width: ${Breakpoints.mobile}) {
          grid-template-columns: repeat(1, 1fr);
          padding: 30px;
     }
`;
