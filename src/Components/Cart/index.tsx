import * as S from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { closeCart, remove } from '../../store/reducers/cart';
import { RootReducer } from '../../store';

const Cart = () => {
     const { isOpenCart, items } = useSelector((state: RootReducer) => state.cart);
     const dispatch = useDispatch();

     const fecharCart = () => {
          dispatch(closeCart());
     };

     const removerPrato = (id: number) => {
          dispatch(remove(id));
     };

     const formatarPreco = (preco: number) => {
          if (preco !== undefined && preco !== null) {
               return 'R$ ' + preco.toFixed(2).replace('.', ',');
          }
          return '0,00';
     };

     const totalCart = items.reduce((total, item) => total + item.preco, 0);

     const payment = () => {
          if (items.length > 0) {
               dispatch(closeCart());
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
                                   <p>{formatarPreco(item.preco)}</p>
                              </div>
                              <S.Trash onClick={() => removerPrato(item.id)} />
                         </S.Dish>
                    ))}

                    <S.Cost>
                         <p>Valor total:</p>
                         <span>{formatarPreco(totalCart)}</span>
                    </S.Cost>

                    <S.Button>Continuar com a entrega</S.Button>
               </S.Sidebar>
          </S.Container>
     );
};

export default Cart;
