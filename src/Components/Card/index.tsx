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

const Card = () => {
     return (
          <Container>
               <img src="https://placehold.co/472x217" alt="" />
               <BotoesSobreImagem>
                    <Button>Destaque da semana</Button>
                    <Button>Japonesa</Button>
               </BotoesSobreImagem>
               <AreaTexto>
                    <Cabecalho>
                         <Titulo>Hioki Sushi</Titulo>
                         <Classificacao>
                              <Nota>4.9</Nota>
                              <img src={estrela} alt="Estrela" />
                         </Classificacao>
                    </Cabecalho>

                    <Texto>
                         Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis
                         frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega
                         rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem
                         sair do lar com nosso delivery!
                    </Texto>
                    <Button clicked>Saiba Mais</Button>
               </AreaTexto>
          </Container>
     );
};

export default Card;
