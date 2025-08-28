import Card from './Components/Card';
import Hero from './containers/Hero';
import { Cards, GlobalCSS, Principal } from './styles';
import sushi from './assets/images/sushi.png';
import macarrao from './assets/images/macarrao.png';
import Footer from './containers/Footer';

function App() {
     return (
          <>
               <GlobalCSS />
               <Hero />

               <Principal>
                    <Cards>
                         <Card
                              key={1}
                              imagem={sushi}
                              botoesImagem={['Destaque da semana', 'Japonesa']}
                              titulo="Hioki Sushi"
                              nota={4.9}
                              descricao="Peça já o melhor da culinária japonesa no conforto da sua casa!
                               Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis.
                                Entrega rápida, embalagens cuidadosas e qualidade garantida.
                                Experimente o Japão sem sair do lar com nosso delivery!"
                         />
                         <Card
                              key={2}
                              imagem={macarrao}
                              botoesImagem={['Italiana']}
                              titulo="La Dolce Vita Trattoria"
                              nota={4.6}
                              descricao="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você!
                               Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis,
                                tudo no conforto do seu lar. Entrega rápida,
                               pratos bem embalados e sabor inesquecível. Peça já!"
                         />
                         <Card
                              key={3}
                              imagem={macarrao}
                              botoesImagem={['Italiana']}
                              titulo="La Dolce Vita Trattoria"
                              nota={4.6}
                              descricao="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você!
                               Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis,
                                tudo no conforto do seu lar. Entrega rápida,
                               pratos bem embalados e sabor inesquecível. Peça já!"
                         />
                         <Card
                              key={4}
                              imagem={sushi}
                              botoesImagem={['Destaque da semana', 'Japonesa']}
                              titulo="Hioki Sushi"
                              nota={4.9}
                              descricao="Peça já o melhor da culinária japonesa no conforto da sua casa!
                               Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis.
                                Entrega rápida, embalagens cuidadosas e qualidade garantida.
                                Experimente o Japão sem sair do lar com nosso delivery!"
                         />
                    </Cards>
               </Principal>
               <Footer />
          </>
     );
}

export default App;
