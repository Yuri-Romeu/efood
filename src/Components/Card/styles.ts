import styled from 'styled-components';
import { Breakpoints, Colors } from '../../styles';

export const Container = styled.div`
     width: 472px;
     height: 100%;
     position: relative;

     img:first-child {
          display: block;
          height: 217px;
          object-fit: cover;
          width: 100%;
     }

     @media (max-width: ${Breakpoints.mobile}) {
          width: 100%;
     }
`;

export const Imagebuttons = styled.div`
     position: absolute;
     top: 14px;
     right: 10px;
     display: flex;
     gap: 8px;
`;

export const Title = styled.h1`
     font-family: 'Roboto';
     font-weight: 700;
     font-size: 18px;
`;

export const Classification = styled.div`
     display: flex;
     align-items: center;
     gap: 10px;

     img {
          width: 21px;
          height: 21px;
     }
`;

export const Rating = styled.p`
     font-family: 'Roboto';
     font-weight: 700;
     font-size: 18px;
`;

export const TextArea = styled.div`
     padding: 10px;
     border: 1px solid ${Colors.salmon};
     border-top: none;
`;

export const Header = styled.div`
     display: flex;
     justify-content: space-between;
     align-items: center;
     margin-bottom: 10px;
`;

export const Text = styled.p`
     font-family: 'Roboto';
     font-weight: 400;
     font-size: 14px;
     line-height: 22px;
     text-align: justify;
     margin: 16px 0;
`;
