import CardPerfil from '../../Components/CardPerfil';
import HeaderPerfil from '../../Components/HeaderPerfil';
import { Cards, Principal } from '../../styles';

const Perfil = () => {
     return (
          <>
               <HeaderPerfil />
               <Principal>
                    <Cards tipoCards="perfil">
                         <CardPerfil />
                         <CardPerfil />
                         <CardPerfil />
                         <CardPerfil />
                         <CardPerfil />
                         <CardPerfil />
                    </Cards>
               </Principal>
          </>
     );
};

export default Perfil;
