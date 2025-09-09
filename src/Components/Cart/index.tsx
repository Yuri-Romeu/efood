import { Button, Container, Lixeira, NomePrato, Overlay, Prato, Sidebar, Valor } from './styles';
import pizza from '../../assets/images/pizza.png';

const Cart = () => {
     return (
          <Container>
               <Overlay />

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
