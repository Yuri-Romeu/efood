import { Button, Container, Lixeira, NomePrato, Overlay, Prato, Sidebar, Valor } from './styles';
import pizza from '../../assets/images/pizza.png';
import { useDispatch, useSelector } from 'react-redux';
import { close, remove } from '../../store/reducers/cart';
import { RootReducer } from '../../store';

const Cart = () => {
     const { isOpen, items } = useSelector((state: RootReducer) => state.cart);
     const dispatch = useDispatch();

     const fecharCart = () => {
          dispatch(close());
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

     return (
          <Container className={isOpen ? 'is-open' : ''}>
               <Overlay onClick={fecharCart} />

               <Sidebar>
                    {items.map(item => (
                         <Prato>
                              <img src={item.foto} alt="Prato" />
                              <div>
                                   <NomePrato>{item.nome}</NomePrato>
                                   <p>{formatarPreco(item.preco)}</p>
                              </div>
                              <Lixeira onClick={() => removerPrato(item.id)} />
                         </Prato>
                    ))}

                    <Valor>
                         <p>Valor total:</p>
                         <span>{formatarPreco(totalCart)}</span>
                    </Valor>

                    <Button>Continuar com a entrega</Button>
               </Sidebar>
          </Container>
     );
};

export default Cart;
