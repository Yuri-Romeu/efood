import * as S from './styles';
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
          if (descricao.length > 234) {
               return descricao.substring(0, 231) + '...';
          }
          return descricao;
     };

     return (
          <S.Container>
               <img src={imagem} alt="" />
               <S.Imagebuttons>
                    {destacado && <Button>Destaque da semana</Button>}
                    <Button>{botoesImagem}</Button>
               </S.Imagebuttons>
               <S.TextArea>
                    <S.Header>
                         <S.Title>{titulo}</S.Title>
                         <S.Classification>
                              <S.Rating>{nota}</S.Rating>
                              <img src={estrela} alt="Estrela" />
                         </S.Classification>
                    </S.Header>

                    <S.Text>{getDescricao(descricao)}</S.Text>

                    <Link to={`/product/${id}`}>
                         <Button clicked>Saiba Mais</Button>
                    </Link>
               </S.TextArea>
          </S.Container>
     );
};

export default Card;
