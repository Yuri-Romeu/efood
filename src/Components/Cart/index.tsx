import { Button, Container, Lixeira, NomePrato, Overlay, Prato, Sidebar, Valor } from './styles';
import pizza from '../../assets/images/pizza.png';
import { useDispatch, useSelector } from 'react-redux';
import { close } from '../../store/reducers/cart';
import { RootReducer } from '../../store';

const Cart = () => {
     const { isOpen, items } = useSelector((state: RootReducer) => state.cart);
     const dispatch = useDispatch();

     const fecharCart = () => {
          dispatch(close());
     };

     return (
          <Container className={isOpen ? 'is-open' : ''}>
               <Overlay onClick={fecharCart} />

               <Sidebar>
                    <Prato>
                         <img src={pizza} alt="Prato" />
                         <div>
                              <NomePrato>Pizza Marguerita</NomePrato>
                              <p>R$ 19,90</p>
                         </div>
                         <Lixeira />
                    </Prato>

                    <Prato>
                         <img src={pizza} alt="Prato" />
                         <div>
                              <NomePrato>Pizza Marguerita</NomePrato>
                              <p>R$ 19,90</p>
                         </div>
                         <Lixeira />
                    </Prato>

                    <Valor>
                         <p>Valor total:</p>
                         <span>R$ 19,90</span>
                    </Valor>

                    <Button>Continuar com a entrega</Button>
               </Sidebar>
          </Container>
     );
};

export default Cart;
