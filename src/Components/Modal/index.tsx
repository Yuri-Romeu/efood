import pizza from '../../assets/images/pizza.png';
import fechar from '../../assets/images/close 1.png';
import { Container, Descricao, Modal as ModalStyled, Titulo, Botao, ImgFechar } from './styles';
import { useState } from 'react';

type Props = {
     prato: {
          foto: string;
          nome: string;
          descricao: string;
          preco?: number;
          porcao?: string;
     };
     onFechar: () => void;
};

const Modal = ({ prato, onFechar }: Props) => {
     const formatarPreco = (preco: number) => {
          if (preco !== undefined && preco !== null) {
               return preco.toFixed(2).replace('.', ',');
          }
          return '0,00';
     };

     return (
          <Container>
               <ModalStyled>
                    <div>
                         <img src={prato.foto} alt="" />
                    </div>

                    <div>
                         <Titulo>{prato.nome}</Titulo>

                         <Descricao>{prato.descricao}</Descricao>

                         <span>Serve de: {prato.porcao}</span>

                         <Botao>Adicionar ao carrinho - R$ {formatarPreco(prato.preco || 0)}</Botao>
                    </div>

                    <ImgFechar src={fechar} alt="Fechar" onClick={onFechar} />
               </ModalStyled>
          </Container>
     );
};

export default Modal;
