import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Cardapio, Pratos } from '../Home';

import CardPerfil from '../../Components/CardPerfil';
import HeaderPerfil from '../../Components/HeaderPerfil';
import { Cards, Principal } from '../../styles';
import Modal from '../../Components/Modal';

const Perfil = () => {
     const [pratosPerfil, setPratosPerfil] = useState<Cardapio[]>([]);
     const [pratos, setPratos] = useState<Pratos | null>(null);

     const [modalAberto, setModalAberto] = useState(false);
     const [pratoSelecionado, setPratoSelecionado] = useState<Cardapio | null>(null);

     const { id } = useParams();

     useEffect(() => {
          fetch(`https://ebac-fake-api.vercel.app/api/efood/restaurantes/${id}`)
               .then(res => res.json())
               .then((res: Pratos) => {
                    setPratosPerfil(res.cardapio);
                    setPratos(res);
               });
     }, [id]);

     if (!pratos) {
          return <h1>Carregando...</h1>;
     }

     return (
          <>
               {pratos && (
                    <HeaderPerfil capa={pratos.capa} nome={pratos.titulo} tipo={pratos.tipo} />
               )}
               <Principal>
                    <Cards tipoCards="perfil">
                         {pratosPerfil.map(prato => (
                              <CardPerfil
                                   key={prato.id}
                                   imagem={prato.foto}
                                   titulo={prato.nome}
                                   descricao={prato.descricao}
                                   onMaisDetalhes={() => {
                                        setPratoSelecionado(prato);
                                        setModalAberto(true);
                                   }}
                              />
                         ))}
                    </Cards>
                    {modalAberto && pratoSelecionado && (
                         <Modal prato={pratoSelecionado} onFechar={() => setModalAberto(false)} />
                    )}
               </Principal>
          </>
     );
};

export default Perfil;
