import Card from '../../Components/Card';
import { Cards, Principal } from '../../styles';
import Hero from '../../containers/Hero';
import { useEffect, useState } from 'react';
import { useGetRestaurantsQuery } from '../../services/api';

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
          return <h1>Carregando...</h1>;
     }
};

export default Home;
