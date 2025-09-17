import styled from 'styled-components';
import background from '../../assets/images/fundo.png';
import { Breakpoints, Colors } from '../../styles';

type Props = {
     background: string;
};

type PropsTitle = {
     type: string;
};

export const Container = styled.header`
     width: 100%;
`;

export const Header = styled.div`
     height: 180px;
     display: flex;
     align-items: center;
     justify-content: space-around;
     background-image: url(${background});

     h4.carrinho {
          cursor: pointer;
     }

     @media (max-width: ${Breakpoints.mobile}) {
          flex-direction: column;
     }
`;

export const ImageContainer = styled.div<Props>`
     width: 100%;
     height: 280px;
     background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
          url(${props => props.background});
     background-size: cover;
     background-position: center;
     display: flex;
     flex-direction: column;
     justify-content: space-between;
`;

export const Title = styled.h1<PropsTitle>`
     font-family: 'Roboto';
     font-weight: ${props => (props.type === 'categoria' ? 100 : 900)};
     font-size: 32px;
     color: ${Colors.white};
     padding: ${props => (props.type === 'categoria' ? '25px 170px' : '32px 170px')};

     @media (max-width: ${Breakpoints.mobile}) {
          padding: ${props => (props.type === 'categoria' ? '25px 50px' : '32px 50px')};
     }
`;
