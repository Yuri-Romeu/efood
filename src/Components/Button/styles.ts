import styled from 'styled-components';
import { Cores } from '../../styles';

type Props = {
     clicked?: boolean;
};

export const Botao = styled.button<Props>`
     background-color: ${Cores.salmao};
     border: none;
     font-size: 14px;
     font-weight: 700;
     color: ${Cores.bege};
     padding: 4px 10px;
     cursor: ${Props => (Props.clicked ? 'pointer' : 'default')};
`;
