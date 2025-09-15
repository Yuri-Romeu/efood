import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import CardPerfil from '../../Components/CardPerfil';
import HeaderPerfil from '../../Components/HeaderPerfil';
import { Cards, Principal } from '../../styles';
import Modal from '../../Components/Modal';
import Payment from '../../Components/Payment';

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
                    <HeaderPerfil cover={pratos.capa} name={pratos.titulo} type={pratos.tipo} />
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
                         <Modal dish={pratoSelecionado} onClose={() => setModalAberto(false)} />
                    )}
               </Principal>

               <Payment />
          </>
     );
};

export default Perfil;
