import * as S from './styles';
import { openCart } from '../../store/reducers/cart';
import { closePayment as closePaymentReducer } from '../../store/reducers/payment';
import { useDispatch } from 'react-redux';
import Inputs from '../Inputs';

type Props = {
     active: boolean;
};

const Payment = ({ active }: Props) => {
     const dispatch = useDispatch();

     const closePayment = () => {
          dispatch(closePaymentReducer());
     };

     const returnCart = () => {
          dispatch(closePaymentReducer());
          dispatch(openCart());
     };

     return (
          <S.Container active={active}>
               <S.Overlay onClick={closePayment} />

               <S.Sidebar>
                    <h3>Entrega</h3>

                    <Inputs name="remetente" label="Quem irá receber" type="text" />
                    <Inputs name="endereco" label="Endereço" type="text" />
                    <Inputs name="cidade" label="Cidade" type="text" />

                    <S.GroupInputs>
                         <Inputs name="cep" label="CEP" type="number" size={150} />
                         <Inputs name="numero" label="Número" type="number" size={150} />
                    </S.GroupInputs>

                    <Inputs name="completo" label="Complemento (opcional)" type="text" />

                    <div className="buttons">
                         <S.Button>Continuar com o pagamento</S.Button>
                         <S.Button onClick={returnCart}>Voltar para o carrinho</S.Button>
                    </div>
               </S.Sidebar>
          </S.Container>
     );
};

export default Payment;
