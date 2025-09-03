import { Botao, Container, Descricao, Titulo } from './styles';

type Props = {
     imagem: string;
     titulo: string;
     descricao: string;
     onMaisDetalhes?: () => void;
};

const CardPerfil = ({ imagem, titulo, descricao, onMaisDetalhes }: Props) => {
     return (
          <Container>
               <img src={imagem} alt="" />

               <Titulo>{titulo}</Titulo>

               <Descricao>{descricao}</Descricao>

               <Botao onClick={onMaisDetalhes}>Mais detalhes</Botao>
          </Container>
     );
};

export default CardPerfil;
