import { Cabecalho, Container, ContainerImage, Titulo } from './styles';
import logo from '../../assets/images/logo.png';
import macarrao from '../../assets/images/macarrao.png';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { open } from '../../store/reducers/cart';
import { RootReducer } from '../../store';

type Props = {
     tipo: string;
     capa: string;
     nome: string;
};

const HeaderPerfil = ({ tipo, capa, nome }: Props) => {
     const dispatch = useDispatch();
     const { items } = useSelector((state: RootReducer) => state.cart);

     const abrirCart = () => {
          dispatch(open());
     };

     return (
          <Container>
               <Cabecalho>
                    <h4>Restaurantes</h4>
                    <Link to="/">
                         <img src={logo} alt="" />
                    </Link>
                    <h4 className="carrinho" onClick={abrirCart}>
                         {items.length} produto(s) no carrinho
                    </h4>
               </Cabecalho>

               <ContainerImage fundo={capa}>
                    <Titulo tipo="categoria">{tipo}</Titulo>

                    <Titulo tipo="titulo">{nome}</Titulo>
               </ContainerImage>
          </Container>
     );
};

export default HeaderPerfil;
