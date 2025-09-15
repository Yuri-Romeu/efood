import styled from 'styled-components';
import { Colors } from '../../styles';

type Props = {
     clicked?: boolean;
};

export const Button = styled.button<Props>`
     background-color: ${Colors.salmon};
     border: none;
     font-size: 14px;
     font-weight: 700;
     color: ${Colors.beige};
     padding: 4px 10px;
     cursor: ${Props => (Props.clicked ? 'pointer' : 'default')};
`;
