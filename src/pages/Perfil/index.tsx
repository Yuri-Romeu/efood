import CardPerfil from '../../Components/CardPerfil';
import HeaderPerfil from '../../Components/HeaderPerfil';
import { Cards, Principal } from '../../styles';
import { PratoPerfil } from '../../models/prato';
import pizza from '../../assets/images/pizza.png';

const PratosPerfil: PratoPerfil[] = [
     {
          id: 1,
          imagem: pizza,
          titulo: 'Pizza Marguerita',
          descricao: `A clássica Marguerita: molho de tomate suculento,
           mussarela derretida, manjericão fresco e um toque de azeite.
            Sabor e simplicidade!`,
     },
     {
          id: 2,
          imagem: pizza,
          titulo: 'Pizza Marguerita',
          descricao: `A clássica Marguerita: molho de tomate suculento,
           mussarela derretida, manjericão fresco e um toque de azeite.
            Sabor e simplicidade!`,
     },
     {
          id: 3,
          imagem: pizza,
          titulo: 'Pizza Marguerita',
          descricao: `A clássica Marguerita: molho de tomate suculento,
           mussarela derretida, manjericão fresco e um toque de azeite.
            Sabor e simplicidade!`,
     },
     {
          id: 4,
          imagem: pizza,
          titulo: 'Pizza Marguerita',
          descricao: `A clássica Marguerita: molho de tomate suculento,
           mussarela derretida, manjericão fresco e um toque de azeite.
            Sabor e simplicidade!`,
     },
     {
          id: 5,
          imagem: pizza,
          titulo: 'Pizza Marguerita',
          descricao: `A clássica Marguerita: molho de tomate suculento,
           mussarela derretida, manjericão fresco e um toque de azeite.
            Sabor e simplicidade!`,
     },
     {
          id: 6,
          imagem: pizza,
          titulo: 'Pizza Marguerita',
          descricao: `A clássica Marguerita: molho de tomate suculento,
           mussarela derretida, manjericão fresco e um toque de azeite.
            Sabor e simplicidade!`,
     },
];

const Perfil = () => {
     return (
          <>
               <HeaderPerfil />
               <Principal>
                    <Cards tipoCards="perfil">
                         {PratosPerfil.map(prato => (
                              <CardPerfil
                                   key={prato.id}
                                   imagem={prato.imagem}
                                   titulo={prato.titulo}
                                   descricao={prato.descricao}
                              />
                         ))}
                    </Cards>
               </Principal>
          </>
     );
};

export default Perfil;
