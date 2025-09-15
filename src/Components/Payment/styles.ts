import styled from 'styled-components';
import { Colors } from '../../styles';

type ContainerProps = {
     active: boolean;
};

export const Container = styled.div<ContainerProps>`
     position: fixed;
     top: 0;
     left: 0;
     width: 100%;
     height: 100%;
     display: ${props => (props.active ? 'flex' : 'none')};
     justify-content: flex-end;
     z-index: 1;
`;

export const Overlay = styled.div`
     position: absolute;
     top: 0;
     left: 0;
     width: 100%;
     height: 100%;
     background-color: #000;
     opacity: 0.7;
`;

export const Sidebar = styled.aside`
     background-color: ${Colors.salmon};
     z-index: 1;
     padding: 16px 8px 0 8px;
     max-width: 360px;
     width: 100%;
`;

export const Button = styled.button`
     background-color: ${Colors.beige};
     border: none;
     font-size: 14px;
     font-weight: 700;
     color: ${Colors.salmon};
     width: 100%;
     padding: 4px 10px;
     cursor: pointer;
`;
