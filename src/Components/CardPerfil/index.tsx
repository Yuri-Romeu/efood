import { Botao, Container, Descricao, Titulo } from './styles';

type Props = {
     imagem: string;
     titulo: string;
     descricao: string;
};

const CardPerfil = ({ imagem, titulo, descricao }: Props) => {
     return (
          <Container>
               <img src={imagem} alt="" />

               <Titulo>{titulo}</Titulo>

               <Descricao>{descricao}</Descricao>

               <Botao>Adicionar ao carrinho</Botao>
          </Container>
     );
};

export default CardPerfil;
