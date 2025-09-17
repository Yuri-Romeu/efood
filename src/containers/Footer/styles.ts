import styled from 'styled-components';
import { Breakpoints, Colors } from '../../styles';

export const Footer = styled.footer`
     background-color: ${Colors.beige};
     width: 100%;
     height: 290px;
     display: flex;
     flex-direction: column;
     align-items: center;
`;

export const Logo = styled.img`
     margin: 40px 0;
`;

export const SocialMedia = styled.div`
     display: flex;
     gap: 10px;
`;

export const Text = styled.p`
     font-weight: 400;
     font-size: 10px;
     width: 480px;
     text-align: center;
     margin-top: 60px;

     @media (max-width: ${Breakpoints.mobile}) {
          width: 100%;
          font-size: 12px;
     }
`;
