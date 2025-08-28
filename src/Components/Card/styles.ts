import styled from 'styled-components';

export const Container = styled.div`
     width: 472px;
     height: 398px;

     img {
          display: block;
          width: 100%;
     }
`;

export const Titulo = styled.h1`
     font-family: 'Roboto';
     font-weight: 700;
     font-size: 18px;
`;

export const Classificacao = styled.div`
     display: flex;
     align-items: center;
     gap: 10px;

     img {
          width: 21px;
          height: 21px;
     }
`;

export const Nota = styled.p`
     font-family: 'Roboto';
     font-weight: 700;
     font-size: 18px;
`;

export const AreaTexto = styled.div`
     padding: 10px;
     border: 1px solid #e66767;
     border-top: none;
`;

export const Cabecalho = styled.div`
     display: flex;
     justify-content: space-between;
     align-items: center;
     margin-bottom: 10px;
`;

export const Texto = styled.p`
     font-family: 'Roboto';
     font-weight: 400;
     font-size: 14px;
     line-height: 22px;
     text-align: justify;
     margin-bottom: 10px;
`;
