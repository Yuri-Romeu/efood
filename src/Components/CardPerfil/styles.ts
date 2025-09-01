import styled from 'styled-components';
import { Cores } from '../../styles';

export const Container = styled.div`
     max-width: 320px;
     min-height: 338px;
     height: 100%;
     display: flex;
     flex-direction: column;
     align-items: flex-start;
     justify-content: space-between;
     background-color: ${Cores.salmao};
     padding: 10px;

     img {
          max-width: 304px;
          width: 100%;
          max-height: 167px;
          height: 100%;
     }
`;

export const Titulo = styled.h1`
     font-family: 'Roboto';
     font-weight: 900;
     font-size: 16px;
     color: ${Cores.bege};
`;

export const Descricao = styled.p`
     font-family: 'Roboto';
     font-weight: 400;
     font-size: 14px;
     line-height: 22px;
     color: ${Cores.bege};
`;

export const Botao = styled.button`
     background-color: ${Cores.bege};
     color: ${Cores.salmao};
     font-size: 14px;
     font-weight: 700;
     padding: 4px 10px;
     cursor: pointer;
     border: none;
     width: 100%;
`;
