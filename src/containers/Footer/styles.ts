import styled from 'styled-components';
import { Cores } from '../../styles';

export const Footer = styled.footer`
     background-color: ${Cores.bege};
     width: 100%;
     height: 290px;
     display: flex;
     flex-direction: column;
     align-items: center;
`;

export const Logo = styled.img`
     margin: 40px 0;
`;

export const RedesSociais = styled.div`
     display: flex;
     gap: 10px;
`;

export const Texto = styled.p`
     font-weight: 400;
     font-size: 10px;
     width: 480px;
     text-align: center;
     margin-top: 60px;
`;
