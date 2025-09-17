import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import CardPerfil from '../../Components/CardPerfil';
import HeaderPerfil from '../../Components/HeaderPerfil';
import { Cards, Main } from '../../styles';
import Modal from '../../Components/Modal';
import Payment from '../../Components/Payment';
import { useSelector } from 'react-redux';
import { RootReducer } from '../../store';
import Loader from '../../Components/Loader';

const Perfil = () => {
     const [pratosPerfil, setPratosPerfil] = useState<Cardapio[]>([]);
     const [pratos, setPratos] = useState<Pratos | null>(null);

     const [modalAberto, setModalAberto] = useState(false);
     const [pratoSelecionado, setPratoSelecionado] = useState<Cardapio | null>(null);

     const { isOpenPayment } = useSelector((state: RootReducer) => state.payment);

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
          return <Loader />;
     }

     return (
          <>
               {pratos && (
                    <HeaderPerfil cover={pratos.capa} name={pratos.titulo} type={pratos.tipo} />
               )}
               <Main>
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
               </Main>

               <Payment active={isOpenPayment} />
          </>
     );
};

export default Perfil;
