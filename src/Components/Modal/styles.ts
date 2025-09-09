import styled from 'styled-components';
import { Cores } from '../../styles';

export const Container = styled.div`
     position: fixed;
     top: 0;
     left: 0;
     width: 100%;
     height: 100%;
     display: flex;
     justify-content: center;
     align-items: center;

     &.isVisible {
          display: none;
     }
`;

export const Overlay = styled.div`
     position: absolute;
     top: 0;
     left: 0;
     width: 100%;
     height: 100%;
     background-color: rgba(0, 0, 0, 0.7);
     z-index: 0;
`;

export const Modal = styled.div`
     position: relative;
     background-color: ${Cores.salmao};
     padding: 20px;
     width: 1024px;
     height: 344px;
     box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
     display: flex;
     gap: 20px;
     z-index: 1;

     span {
          display: block;
          color: ${Cores.branco};
          margin-bottom: 16px;
     }

     img:first-child {
          width: 280px;
          height: 280px;
          object-fit: cover;
     }
`;

export const Titulo = styled.h1`
     font-family: 'Roboto';
     font-weight: 900;
     font-size: 18px;
     color: ${Cores.branco};
     margin-bottom: 16px;
`;

export const Descricao = styled.p`
     font-family: 'Roboto';
     font-weight: 400;
     font-size: 14px;
     line-height: 22px;
     color: ${Cores.branco};
     margin-bottom: 24px;
     word-spacing: 2px;
`;

export const Botao = styled.button`
     background-color: ${Cores.semiBranco};
     border: none;
     font-size: 14px;
     font-weight: 700;
     color: ${Cores.salmao};
     padding: 4px 10px;
     cursor: pointer;
`;

export const ImgFechar = styled.img`
     width: 16px;
     height: 16px;
     position: absolute;
     top: 10px;
     right: 10px;
     cursor: pointer;
`;
