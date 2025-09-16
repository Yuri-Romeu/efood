import fechar from '../../assets/images/close 1.png';
import * as S from './styles';
import { useDispatch } from 'react-redux';
import { AnimatePresence, motion } from 'framer-motion';
import { add, openCart } from '../../store/reducers/cart';
import { useState } from 'react';

type Props = {
     dish: Cardapio;
     onClose: () => void;
};

const Modal = ({ dish, onClose }: Props) => {
     const dispatch = useDispatch();
     const [isVisible, setIsVisible] = useState(true);

     const closeModal = () => {
          setIsVisible(false);
     };

     const handleExited = () => {
          onClose();
     };

     const addDish = () => {
          dispatch(add(dish));
          closeModal();
          dispatch(openCart());
     };

     const formatPrice = (price: number) => {
          if (price !== undefined && price !== null) {
               return price.toFixed(2).replace('.', ',');
          }
          return '0,00';
     };

     return (
          <AnimatePresence onExitComplete={handleExited}>
               {isVisible && (
                    <S.Container>
                         <motion.div
                              className="overlay"
                              onClick={closeModal}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 0.5 }}
                              exit={{ opacity: 0 }}
                              transition={{ duration: 0.3 }}
                         />

                         <motion.div
                              className="modal"
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.8 }}
                              transition={{ duration: 0.3 }}
                         >
                              <img className="dish-image" src={dish.foto} alt={dish.nome} />

                              <div className="content">
                                   <S.Title>{dish.nome}</S.Title>
                                   <S.Description>{dish.descricao}</S.Description>
                                   <span>Serve de: {dish.porcao}</span>

                                   <S.Button onClick={addDish}>
                                        Adicionar ao carrinho - R$ {formatPrice(dish.preco || 0)}
                                   </S.Button>
                              </div>

                              <S.ImageClose src={fechar} alt="Fechar" onClick={closeModal} />
                         </motion.div>
                    </S.Container>
               )}
          </AnimatePresence>
     );
};

export default Modal;
