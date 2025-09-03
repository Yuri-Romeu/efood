import {
     AreaTexto,
     BotoesSobreImagem,
     Cabecalho,
     Classificacao,
     Container,
     Nota,
     Texto,
     Titulo,
} from './styles';
import estrela from '../../assets/images/star.png';
import Button from '../Button';
import { Link } from 'react-router-dom';

type Props = {
     id: number;
     imagem: string;
     botoesImagem: string;
     destacado: boolean;
     titulo: string;
     nota: number;
     descricao: string;
};

const Card = ({ imagem, botoesImagem, titulo, nota, descricao, destacado, id }: Props) => {
     const getDescricao = (descricao: string) => {
          if (descricao.length > 278) {
               return descricao.substring(0, 275) + '...';
          }
          return descricao;
     };

     return (
          <Container>
               <img src={imagem} alt="" />
               <BotoesSobreImagem>
                    {destacado && <Button>Destaque da semana</Button>}
                    <Button>{botoesImagem}</Button>
               </BotoesSobreImagem>
               <AreaTexto>
                    <Cabecalho>
                         <Titulo>{titulo}</Titulo>
                         <Classificacao>
                              <Nota>{nota}</Nota>
                              <img src={estrela} alt="Estrela" />
                         </Classificacao>
                    </Cabecalho>

                    <Texto>{getDescricao(descricao)}</Texto>

                    <Link to={`/product/${id}`}>
                         <Button clicked>Saiba Mais</Button>
                    </Link>
               </AreaTexto>
          </Container>
     );
};

export default Card;
