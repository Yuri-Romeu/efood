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
     imagem: string;
     botoesImagem: string[];
     titulo: string;
     nota: number;
     descricao: string;
};

const Card = ({ imagem, botoesImagem, titulo, nota, descricao }: Props) => {
     return (
          <Container>
               <img src={imagem} alt="" />
               <BotoesSobreImagem>
                    {botoesImagem.map(botao => (
                         <Button>{botao}</Button>
                    ))}
               </BotoesSobreImagem>
               <AreaTexto>
                    <Cabecalho>
                         <Titulo>{titulo}</Titulo>
                         <Classificacao>
                              <Nota>{nota}</Nota>
                              <img src={estrela} alt="Estrela" />
                         </Classificacao>
                    </Cabecalho>

                    <Texto>{descricao}</Texto>

                    <Link to="/product">
                         <Button clicked>Saiba Mais</Button>
                    </Link>
               </AreaTexto>
          </Container>
     );
};

export default Card;
