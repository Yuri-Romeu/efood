import styled from 'styled-components';
import { Breakpoints, Colors } from '../../styles';
import trash from '../../assets/images/Lixeira.png';

export const Container = styled.div`
     position: fixed;
     top: 0;
     left: 0;
     width: 100%;
     height: 100%;
     display: none;
     justify-content: flex-end;
     z-index: 1;

     &.is-open {
          display: flex;
     }
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

     @media (max-width: ${Breakpoints.mobile}) {
          max-width: 300px;
     }
`;

export const Dish = styled.div`
     margin: 16px 0;
     display: flex;
     background-color: ${Colors.beige};
     padding: 8px 8px 12px 8px;
     position: relative;

     div {
          margin-left: 8px;

          p {
               font-weight: 400;
               font-size: 14px;
               color: ${Colors.salmon};
               line-height: 22px;
          }
     }

     img {
          object-fit: cover;
          width: 80px;
          height: 80px;
     }
`;

export const DishName = styled.h1`
     font-family: 'Roboto';
     font-weight: 900;
     font-size: 18px;
     color: ${Colors.salmon};
     margin-bottom: 16px;
`;

export const Trash = styled.div`
     bottom: 8px;
     right: 8px;
     position: absolute;
     cursor: pointer;
     background-image: url(${trash});
     width: 16px;
     height: 16px;
     background-size: cover;
     z-index: 1;
`;

export const Cost = styled.div`
     display: flex;
     justify-content: space-between;
     font-weight: 700;
     font-size: 14px;
     color: ${Colors.beige};
     margin-top: 40px;
     margin-bottom: 16px;
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
