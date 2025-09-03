import pizza from '../../assets/images/pizza.png';
import fechar from '../../assets/images/close 1.png';
import { Container, Descricao, Modal as ModalStyled, Titulo, Botao, ImgFechar } from './styles';
const Modal = () => {
     return (
          <Container>
               <ModalStyled>
                    <div>
                         <img src={pizza} alt="" />
                    </div>

                    <div>
                         <Titulo>Pizza Marguerita</Titulo>

                         <Descricao>
                              A pizza Margherita é uma pizza clássica da culinária italiana,
                              reconhecida por sua simplicidade e sabor inigualável. Ela é feita com
                              uma base de massa fina e crocante, coberta com molho de tomate fresco,
                              queijo mussarela de alta qualidade, manjericão fresco e azeite de
                              oliva extra-virgem. A combinação de sabores é perfeita, com o molho de
                              tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e
                              as folhas de manjericão frescas, que adicionam um toque de sabor
                              herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os
                              paladares e é uma ótima opção para qualquer ocasião.
                         </Descricao>

                         <span>Serve de: 2 a 3 pessoas</span>

                         <Botao>Adicionar ao carrinho - R$ 60,90</Botao>
                    </div>

                    <ImgFechar src={fechar} alt="Fechar" />
               </ModalStyled>
          </Container>
     );
};

export default Modal;
