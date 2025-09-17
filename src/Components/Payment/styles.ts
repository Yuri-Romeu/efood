import styled from 'styled-components';
import { Breakpoints, Colors } from '../../styles';
import { Link } from 'react-router-dom';

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
     color: ${Colors.beige};
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
     padding: 34px 8px 0 7px;
     max-width: 360px;
     width: 100%;

     h3 {
          font-weight: 700;
          font-size: 16px;
          margin-bottom: 16px;
     }

     .buttons {
          margin-top: 20px;
     }

     @media (max-width: ${Breakpoints.mobile}) {
          max-width: 300px;
     }
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
     margin-top: 8px;
`;

export const GroupInputs = styled.div`
     display: flex;
     justify-content: space-between;
     width: 100%;
`;

export const Text = styled.p`
     font-weight: 400;
     font-size: 14px;
     line-height: 22px;
     margin-bottom: 22px;
`;

export const ButtonLink = styled(Link)`
     background-color: ${Colors.beige};
     display: block;
     text-align: center;
     border: none;
     font-size: 14px;
     font-weight: 700;
     color: ${Colors.salmon};
     width: 100%;
     padding: 4px 10px;
     cursor: pointer;
     margin-top: 8px;
     text-decoration: none;
`;
