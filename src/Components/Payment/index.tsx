import * as S from './styles';
import * as Yup from 'yup';
import { openCart } from '../../store/reducers/cart';
import { closePayment as closePaymentReducer } from '../../store/reducers/payment';
import { useDispatch } from 'react-redux';
import Inputs from '../Inputs';
import { useFormik } from 'formik';
import { usePurchaseMutation } from '../../services/api';

type Props = {
     active: boolean;
};

const Payment = ({ active }: Props) => {
     const [purchase, { isLoading, isSuccess, data }] = usePurchaseMutation();

     const form = useFormik({
          initialValues: {
               remetente: '',
               endereco: '',
               cidade: '',
               cep: '',
               numero: '',
               completo: '',
          },

          validationSchema: Yup.object({
               remetente: Yup.string()
                    .min(5, 'O nome precisa ter no mínimo 5 caracteres')
                    .required('Campo obrigatório'),
               endereco: Yup.string().required('Campo obrigatório'),
               cidade: Yup.string().required('Campo obrigatório'),
               cep: Yup.string()
                    .min(8, 'CEP inválido')
                    .max(8, 'CEP inválido')
                    .required('Campo obrigatório'),
               numero: Yup.string().required('Campo obrigatório'),
               completo: Yup.string().required('Campo obrigatório'),
          }),

          onSubmit: () => {
               purchase({
                    products: [{ id: 1, price: 100 }],
                    delivery: {
                         receiver: form.values.remetente,
                         address: {
                              description: form.values.endereco,
                              city: form.values.cidade,
                              zipCode: form.values.cep,
                              number: form.values.numero,
                              complement: form.values.completo,
                         },
                    },
                    payment: {
                         card: {
                              name: 'Teste',
                              number: '1234123412341234',
                              code: 123,
                              expires: {
                                   month: 12,
                                   year: 2030,
                              },
                         },
                    },
               });
          },
     });

     const dispatch = useDispatch();

     const closePayment = () => {
          dispatch(closePaymentReducer());
     };

     const returnCart = () => {
          dispatch(closePaymentReducer());
          dispatch(openCart());
     };

     const checkInputHasError = (fieldName: string) => {
          const isTouched = fieldName in form.touched;
          const isInvalid = fieldName in form.errors;
          const hasError = isTouched && isInvalid;

          return hasError;
     };

     return (
          <S.Container active={active}>
               <S.Overlay onClick={closePayment} />

               <S.Sidebar>
                    <h3>Entrega</h3>

                    <form onSubmit={form.handleSubmit}>
                         <Inputs
                              name="remetente"
                              label="Quem irá receber"
                              type="text"
                              value={form.values.remetente}
                              onChange={form.handleChange}
                              onBlur={form.handleBlur}
                              class={checkInputHasError('remetente') ? 'error' : ''}
                         />
                         <Inputs
                              name="endereco"
                              label="Endereço"
                              type="text"
                              value={form.values.endereco}
                              onChange={form.handleChange}
                              onBlur={form.handleBlur}
                              class={checkInputHasError('endereco') ? 'error' : ''}
                         />
                         <Inputs
                              name="cidade"
                              label="Cidade"
                              type="text"
                              value={form.values.cidade}
                              onChange={form.handleChange}
                              onBlur={form.handleBlur}
                              class={checkInputHasError('cidade') ? 'error' : ''}
                         />

                         <S.GroupInputs>
                              <Inputs
                                   name="cep"
                                   label="CEP"
                                   type="number"
                                   size={150}
                                   value={form.values.cep}
                                   onChange={form.handleChange}
                                   onBlur={form.handleBlur}
                                   class={checkInputHasError('cep') ? 'error' : ''}
                                   mask="00000-000"
                              />
                              <Inputs
                                   name="numero"
                                   label="Número"
                                   type="number"
                                   size={150}
                                   value={form.values.numero}
                                   onChange={form.handleChange}
                                   onBlur={form.handleBlur}
                                   class={checkInputHasError('numero') ? 'error' : ''}
                              />
                         </S.GroupInputs>

                         <Inputs
                              name="completo"
                              label="Complemento (opcional)"
                              type="text"
                              value={form.values.completo}
                              onChange={form.handleChange}
                              onBlur={form.handleBlur}
                              class={checkInputHasError('completo') ? 'error' : ''}
                         />

                         <div className="buttons">
                              <S.Button>Continuar com o pagamento</S.Button>
                              <S.Button onClick={returnCart}>Voltar para o carrinho</S.Button>
                         </div>
                    </form>
               </S.Sidebar>
          </S.Container>
     );
};

export default Payment;
