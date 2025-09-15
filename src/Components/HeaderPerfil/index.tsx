import * as S from './styles';
import logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { openCart } from '../../store/reducers/cart';
import { RootReducer } from '../../store';

type Props = {
     type: string;
     cover: string;
     name: string;
};

const HeaderPerfil = ({ type, cover, name }: Props) => {
     const dispatch = useDispatch();
     const { items } = useSelector((state: RootReducer) => state.cart);

     const abrirCart = () => {
          dispatch(openCart());
     };

     return (
          <S.Container>
               <S.Header>
                    <h4>Restaurantes</h4>
                    <Link to="/">
                         <img src={logo} alt="" />
                    </Link>
                    <h4 className="carrinho" onClick={abrirCart}>
                         {items.length} produto(s) no carrinho
                    </h4>
               </S.Header>

               <S.ImageContainer background={cover}>
                    <S.Title type="categoria">{type}</S.Title>

                    <S.Title type="titulo">{name}</S.Title>
               </S.ImageContainer>
          </S.Container>
     );
};

export default HeaderPerfil;
