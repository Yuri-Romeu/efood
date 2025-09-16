import * as S from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { closeCart, remove } from '../../store/reducers/cart';
import { openPayment } from '../../store/reducers/payment';
import { RootReducer } from '../../store';
import { formatPrice } from '../../utils';
import { getTotalPrice } from '../../utils';

const Cart = () => {
     const { isOpenCart, items } = useSelector((state: RootReducer) => state.cart);
     const dispatch = useDispatch();

     const fecharCart = () => {
          dispatch(closeCart());
     };

     const removerPrato = (id: number) => {
          dispatch(remove(id));
     };

     const payment = () => {
          if (items.length > 0) {
               dispatch(closeCart());
               dispatch(openPayment());
          } else {
               alert('Seu carrinho está vazio');
          }
     };

     return (
          <S.Container className={isOpenCart ? 'is-open' : ''}>
               <S.Overlay onClick={fecharCart} />

               <S.Sidebar>
                    {items.map(item => (
                         <S.Dish>
                              <img src={item.foto} alt="Prato" />
                              <div>
                                   <S.DishName>{item.nome}</S.DishName>
                                   <p>{formatPrice(item.preco)}</p>
                              </div>
                              <S.Trash onClick={() => removerPrato(item.id)} />
                         </S.Dish>
                    ))}

                    <S.Cost>
                         <p>Valor total:</p>
                         <span>{formatPrice(getTotalPrice(items))}</span>
                    </S.Cost>

                    <S.Button onClick={payment}>Continuar com a entrega</S.Button>
               </S.Sidebar>
          </S.Container>
     );
};

export default Cart;
