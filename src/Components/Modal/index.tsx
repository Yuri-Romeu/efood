import fechar from '../../assets/images/close 1.png';
import * as S from './styles';
import { useDispatch } from 'react-redux';

import { add, open } from '../../store/reducers/cart';

type Props = {
     dish: Cardapio;
     onClose: () => void;
};

const Modal = ({ dish, onClose }: Props) => {
     const dispatch = useDispatch();

     const addDish = () => {
          dispatch(add(dish));
          onClose();
          dispatch(open());
     };

     const formatPrice = (price: number) => {
          if (price !== undefined && price !== null) {
               return price.toFixed(2).replace('.', ',');
          }
          return '0,00';
     };

     return (
          <S.Container>
               <S.Overlay onClick={onClose} />
               <S.Modal>
                    <div>
                         <img src={dish.foto} alt="" />
                    </div>

                    <div>
                         <S.Title>{dish.nome}</S.Title>

                         <S.Description>{dish.descricao}</S.Description>

                         <span>Serve de: {dish.porcao}</span>

                         <S.Button onClick={addDish}>
                              Adicionar ao carrinho - R$ {formatPrice(dish.preco || 0)}
                         </S.Button>
                    </div>

                    <S.ImageClose src={fechar} alt="Fechar" onClick={onClose} />
               </S.Modal>
          </S.Container>
     );
};

export default Modal;
