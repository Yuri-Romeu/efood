import { Container } from './styles';

const Card = () => {
     return (
          <Container>
               <img src="https://placehold.co/472x217" alt="" />
               <div>
                    <h1>Hioki Sushi</h1>

                    <div>
                         <span>4.8</span>
                         <img src="https://placehold.co/21x21" alt="Estrela" />
                    </div>
               </div>
               <p>
                    Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos,
                    sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens
                    cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso
                    delivery!
               </p>
               <button>Saiba Mais</button>
          </Container>
     );
};
export default Card;
