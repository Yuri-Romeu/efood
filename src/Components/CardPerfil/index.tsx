import { Botao, Container, Descricao, Titulo } from './styles';
import pizza from '../../assets/images/pizza.png';

const CardPerfil = () => {
     return (
          <Container>
               <img src={pizza} alt="" />

               <Titulo>Pizza Marguerita</Titulo>

               <Descricao>
                    A clássica Marguerita: molho de tomate suculento, mussarela derretida,
                    manjericão fresco e um toque de azeite. Sabor e simplicidade!
               </Descricao>

               <Botao>Adicionar ao carrinho</Botao>
          </Container>
     );
};

export default CardPerfil;
