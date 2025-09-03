import Card from '../../Components/Card';
import { Cards, Principal } from '../../styles';
import Hero from '../../containers/Hero';
import { useEffect, useState } from 'react';

export type Pratos = {
     id: number;
     titulo: string;
     destacado: boolean;
     tipo: string;
     avaliacao: number;
     descricao: string;
     capa: string;
     cardapio: Cardapio[];
};

export type Cardapio = {
     foto: string;
     preco: number;
     id: number;
     nome: string;
     descricao: string;
     porcao: string;
};

const Home = () => {
     const [cardapio, setCardapio] = useState<Pratos[]>([]);

     useEffect(() => {
          fetch('https://ebac-fake-api.vercel.app/api/efood/restaurantes')
               .then(res => res.json())
               .then(res => setCardapio(res));
     }, []);

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
};

export default Home;
