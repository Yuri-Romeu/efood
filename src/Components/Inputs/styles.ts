import styled from 'styled-components';
import { Breakpoints, Colors } from '../../styles';
import { IMaskInput } from 'react-imask';

type Props = {
     size?: number;
};

export const Container = styled.div<Props>`
     margin-bottom: 8px;
     display: flex;
     flex-direction: column;

     label {
          font-weight: 700;
          font-size: 14px;
          color: ${Colors.beige};
     }
`;

export const Input = styled.input<Props>`
     margin-top: 8px;
     width: ${props => (props.size ? `${props.size}px` : '100%')};
     height: 32px;
     padding: 8px;
     background-color: ${Colors.beige};
     color: #4b4b4b;
     font-weight: 700;
     font-size: 14px;
     border: none;

     @media (max-width: ${Breakpoints.mobile}) {
          width: ${props => (props.size ? `${props.size - 40}px` : '100%')};
     }

     &.error {
          border-color: #e63946;
          background-color: #ffe5e9;
          color: #b71c1c;
          box-shadow: 0 0 4px rgba(230, 57, 70, 0.5);
          animation: shake 0.3s;
     }

     @keyframes shake {
          0% {
               transform: translateX(0);
          }
          25% {
               transform: translateX(-4px);
          }
          50% {
               transform: translateX(4px);
          }
          75% {
               transform: translateX(-4px);
          }
          100% {
               transform: translateX(0);
          }
     }
`;

export const MaskedInput = styled(IMaskInput)<Props>`
     margin-top: 8px;
     width: ${props => (props.size ? `${props.size}px` : '100%')};
     height: 32px;
     padding: 8px;
     background-color: ${Colors.beige};
     color: #4b4b4b;
     font-weight: 700;
     font-size: 14px;
     border: none;

     @media (max-width: ${Breakpoints.mobile}) {
          width: ${props => (props.size ? `${props.size - 40}px` : '100%')};
     }

     &.error {
          border-color: #e63946;
          background-color: #ffe5e9;
          color: #b71c1c;
          box-shadow: 0 0 4px rgba(230, 57, 70, 0.5);
          animation: shake 0.3s;
     }

     @keyframes shake {
          0% {
               transform: translateX(0);
          }
          25% {
               transform: translateX(-4px);
          }
          50% {
               transform: translateX(4px);
          }
          75% {
               transform: translateX(-4px);
          }
          100% {
               transform: translateX(0);
          }
     }
`;
