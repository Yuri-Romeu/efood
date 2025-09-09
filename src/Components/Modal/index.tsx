import pizza from '../../assets/images/pizza.png';
import fechar from '../../assets/images/close 1.png';
import {
     Container,
     Descricao,
     Modal as ModalStyled,
     Titulo,
     Botao,
     ImgFechar,
     Overlay,
} from './styles';
import { useDispatch } from 'react-redux';

import { add, open } from '../../store/reducers/cart';
import { Cardapio } from '../../pages/Home';

type Props = {
     prato: Cardapio;
     onFechar: () => void;
};

const Modal = ({ prato, onFechar }: Props) => {
     const dispatch = useDispatch();

     const addPrato = () => {
          dispatch(add(prato));
          onFechar();
          dispatch(open());
     };

     const formatarPreco = (preco: number) => {
          if (preco !== undefined && preco !== null) {
               return preco.toFixed(2).replace('.', ',');
          }
          return '0,00';
     };

     return (
          <Container>
               <Overlay onClick={onFechar} />
               <ModalStyled>
                    <div>
                         <img src={prato.foto} alt="" />
                    </div>

                    <div>
                         <Titulo>{prato.nome}</Titulo>

                         <Descricao>{prato.descricao}</Descricao>

                         <span>Serve de: {prato.porcao}</span>

                         <Botao onClick={addPrato}>
                              Adicionar ao carrinho - R$ {formatarPreco(prato.preco || 0)}
                         </Botao>
                    </div>

                    <ImgFechar src={fechar} alt="Fechar" onClick={onFechar} />
               </ModalStyled>
          </Container>
     );
};

export default Modal;
