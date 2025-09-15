import * as S from './styles';
import { closePayment as closePaymentReducer } from '../../store/reducers/payment';
import { useDispatch } from 'react-redux';

type Props = {
     active: boolean;
};

const Payment = ({ active }: Props) => {
     const dispatch = useDispatch();

     const closePayment = () => {
          dispatch(closePaymentReducer());
     };

     return (
          <S.Container active={active}>
               <S.Overlay onClick={closePayment} />

               <S.Sidebar>entrega</S.Sidebar>
          </S.Container>
     );
};

export default Payment;
