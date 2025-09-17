import styled from 'styled-components';
import { Breakpoints, Colors } from '../../styles';

export const Container = styled.div`
     position: fixed;
     top: 0;
     left: 0;
     width: 100%;
     height: 100%;
     display: flex;
     justify-content: center;
     align-items: center;
     z-index: 9999;

     .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.7);
     }

     .modal {
          position: relative;
          background-color: ${Colors.salmon};
          padding: 20px;
          width: 90%;
          max-width: 1024px;
          height: auto;
          max-height: 80vh;
          display: flex;
          gap: 20px;
          z-index: 1;
          overflow-y: auto;
          border-radius: 8px;

          img.dish-image {
               width: 280px;
               height: 280px;
               object-fit: cover;
               flex-shrink: 0;
          }

          .content {
               display: flex;
               flex-direction: column;
               justify-content: space-between;
               flex: 1;

               @media (max-width: ${Breakpoints.mobile}) {
                    align-items: center;
               }

               span {
                    color: ${Colors.white};
               }
          }

          @media (max-width: ${Breakpoints.mobile}) {
               flex-direction: column;
               align-items: center;
          }
     }
`;

export const Title = styled.h1`
     font-family: 'Roboto';
     font-weight: 900;
     font-size: 18px;
     color: ${Colors.white};
     margin-bottom: 16px;
     @media (max-width: ${Breakpoints.mobile}) {
          font-size: 20px;
     }
`;

export const Description = styled.p`
     font-family: 'Roboto';
     font-weight: 400;
     font-size: 14px;
     line-height: 22px;
     color: ${Colors.white};
     margin-bottom: 24px;
     @media (max-width: ${Breakpoints.mobile}) {
          text-align: justify;
          width: 80%;
          font-size: 16px;
     }
`;

export const Button = styled.button`
     background-color: ${Colors.beige};
     border: none;
     font-size: 14px;
     font-weight: 700;
     color: ${Colors.salmon};
     padding: 8px 12px;
     cursor: pointer;
     border-radius: 4px;
     @media (max-width: ${Breakpoints.mobile}) {
          margin-top: 10px;
     }
`;

export const ImageClose = styled.img`
     width: 16px;
     height: 16px;
     position: absolute;
     top: 10px;
     right: 10px;
     cursor: pointer;
`;
