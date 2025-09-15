import styled from 'styled-components';
import { Colors } from '../../styles';

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
`;
