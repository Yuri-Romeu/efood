import Card from '../../Components/Card';
import { Cards, Principal } from '../../styles';
import Hero from '../../containers/Hero';
import { useGetRestaurantsQuery } from '../../services/api';
import Loader from '../../Components/Loader';

const Home = () => {
     const { data: cardapio } = useGetRestaurantsQuery();

     if (cardapio) {
          return (
               <>
                    <Hero />
                    <Principal>
                         <Cards tipoCards="principal">
                              {cardapio.map(prato => (
                                   <Card
                                        key={prato.id}
                                        id={prato.id}
                                        imagem={prato.capa}
                                        destacado={prato.destacado}
                                        botoesImagem={prato.tipo}
                                        titulo={prato.titulo}
                                        nota={prato.avaliacao}
                                        descricao={prato.descricao}
                                   />
                              ))}
                         </Cards>
                    </Principal>
               </>
          );
     } else {
          return <Loader />;
     }
};

export default Home;
