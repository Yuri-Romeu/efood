import { Cabecalho, Container, ContainerImage, Titulo } from './styles';
import logo from '../../assets/images/logo.png';
import macarrao from '../../assets/images/macarrao.png';
import { Link } from 'react-router-dom';

const HeaderPerfil = () => {
     return (
          <Container>
               <Cabecalho>
                    <h4>Restaurantes</h4>
                    <Link to="/">
                         <img src={logo} alt="" />
                    </Link>
                    <h4>0 produto(s) no carrinho</h4>
               </Cabecalho>

               <ContainerImage fundo={macarrao}>
                    <Titulo tipo="categoria">Italiana</Titulo>

                    <Titulo tipo="titulo">La Dolce Vita Trattoria</Titulo>
               </ContainerImage>
          </Container>
     );
};

export default HeaderPerfil;
