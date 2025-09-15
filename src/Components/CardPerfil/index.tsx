import * as S from './styles';

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
          <S.Container>
               <img src={imagem} alt="" />

               <S.Title>{titulo}</S.Title>

               <S.Description>{getDescricao(descricao)}</S.Description>

               <S.Button onClick={onMaisDetalhes}>Mais detalhes</S.Button>
          </S.Container>
     );
};

export default CardPerfil;
