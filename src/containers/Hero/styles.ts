import styled from 'styled-components';
import background from '../../assets/images/fundo.png';

export const Container = styled.header`
     background-image: url(${background});
     width: 100%;
     height: 384px;
     background-position: center;
     display: flex;
     flex-direction: column;
     align-items: center;
     gap: 140px;
`;

export const Logo = styled.h1`
     margin-top: 40px;
     text-align: center;
`;

export const Title = styled.h1`
     font-family: 'Roboto';
     font-weight: 900;
     font-size: 36px;
     width: 539px;
     text-align: center;
`;
