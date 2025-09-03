import { Botao, Container, Descricao, Titulo } from './styles';

type Props = {
     imagem: string;
     titulo: string;
     descricao: string;
     onMaisDetalhes?: () => void;
};

const CardPerfil = ({ imagem, titulo, descricao, onMaisDetalhes }: Props) => {
     const getDescricao = (descricao: string) => {
          if (descricao.length > 132) {
               return descricao.substring(0, 129) + '...';
          }
          return descricao;
     };

     return (
          <Container>
               <img src={imagem} alt="" />

               <Titulo>{titulo}</Titulo>

               <Descricao>{getDescricao(descricao)}</Descricao>

               <Botao onClick={onMaisDetalhes}>Mais detalhes</Botao>
          </Container>
     );
};

export default CardPerfil;
