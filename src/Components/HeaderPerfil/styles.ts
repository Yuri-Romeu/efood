import styled from 'styled-components';
import fundo from '../../assets/images/fundo.png';
import { Cores } from '../../styles';

type Props = {
     fundo: string;
};

type PropsTitulo = {
     tipo: string;
};

export const Container = styled.header`
     width: 100%;
`;

export const Cabecalho = styled.div`
     height: 180px;
     display: flex;
     align-items: center;
     justify-content: space-around;
     background-image: url(${fundo});
`;

export const ContainerImage = styled.div<Props>`
     width: 100%;
     height: 280px;
     background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
          url(${props => props.fundo});
     background-size: cover;
     background-position: center;
     display: flex;
     flex-direction: column;
     justify-content: space-between;
`;

export const Titulo = styled.h1<PropsTitulo>`
     font-family: 'Roboto';
     font-weight: ${props => (props.tipo === 'categoria' ? 100 : 900)};
     font-size: 32px;
     color: ${Cores.branco};
     padding: ${props => (props.tipo === 'categoria' ? '25px 170px' : '32px 170px')};
`;
