import * as S from './styles';
import * as Yup from 'yup';
import { openCart } from '../../store/reducers/cart';
import { closePayment as closePaymentReducer } from '../../store/reducers/payment';
import { useDispatch } from 'react-redux';
import { clearCart } from '../../store/reducers/cart';
import Inputs from '../Inputs';
import { useFormik } from 'formik';
import { usePurchaseMutation } from '../../services/api';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootReducer } from '../../store';
import { formatPrice, getTotalPrice } from '../../utils';
import { toast } from 'react-hot-toast';

type Props = {
     active: boolean;
};

const Payment = ({ active }: Props) => {
     const [purchase, { isLoading, isSuccess, data }] = usePurchaseMutation();
     const { items } = useSelector((state: RootReducer) => state.cart);

     const [purchaseCompleted, setPurchaseCompleted] = useState(true);

     const [isDelivery, setIsDelivery] = useState(true);

     const form = useFormik({
          initialValues: {
               remetente: '',
               endereco: '',
               cidade: '',
               cep: '',
               numero: '',
               completo: '',
               nomeCartao: '',
               numeroCartao: '',
               cvvCartao: '',
               mesCartao: '',
               anoCartao: '',
          },

          validationSchema: Yup.object({
               remetente: Yup.string()
                    .min(5, 'O nome precisa ter no mínimo 5 caracteres')
                    .required('Campo obrigatório'),
               endereco: Yup.string().required('Campo obrigatório'),
               cidade: Yup.string().required('Campo obrigatório'),
               cep: Yup.string()
                    .min(9, 'CEP inválido')
                    .max(9, 'CEP inválido')
                    .required('Campo obrigatório'),
               numero: Yup.string().required('Campo obrigatório'),
               completo: Yup.string().required('Campo obrigatório'),

               nomeCartao: Yup.string().when((values, schema) =>
                    !isDelivery ? schema.required('Campo obrigatório') : schema,
               ),
               numeroCartao: Yup.string().when((values, schema) =>
                    !isDelivery ? schema.required('Campo obrigatório') : schema,
               ),
               cvvCartao: Yup.string()
                    .when((values, schema) =>
                         !isDelivery ? schema.required('Campo obrigatório') : schema,
                    )
                    .min(3, 'CVV inválido')
                    .max(3, 'CVV inválido'),
               mesCartao: Yup.string()
                    .when((values, schema) =>
                         !isDelivery ? schema.required('Campo obrigatório') : schema,
                    )
                    .max(2, 'Mês inválido')
                    .min(2, 'Mês inválido'),
               anoCartao: Yup.string()
                    .when((values, schema) =>
                         !isDelivery ? schema.required('Campo obrigatório') : schema,
                    )
                    .max(2, 'Mês inválido')
                    .min(2, 'Mês inválido'),
          }),

          onSubmit: () => {
               purchase({
                    products: items.map(item => ({
                         id: item.id,
                         price: item.preco as number,
                    })),
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
                              name: form.values.nomeCartao,
                              number: form.values.numeroCartao,
                              code: Number(form.values.cvvCartao),
                              expires: {
                                   month: Number(form.values.mesCartao),
                                   year: Number(form.values.anoCartao),
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

     const checkInputHasError = (fieldName: keyof typeof form.values) => {
          const isTouched = !!form.touched[fieldName];
          const isInvalid = !!form.errors[fieldName];
          return isTouched && isInvalid;
     };

     const continuePayment = async () => {
          await form.validateForm();

          if (Object.keys(form.errors).length > 0 || Object.keys(form.touched).length === 0) {
               toast.error('Preencha todos os campos corretamente!');
          } else {
               setIsDelivery(false);
          }
     };

     const capitalLetter = (text: string) => {
          if (!text) return '';
          return text
               .split(' ')
               .map(word => word.charAt(0).toUpperCase() + word.slice(1))
               .join(' ');
     };

     useEffect(() => {
          if (isSuccess) {
               dispatch(clearCart());
               setPurchaseCompleted(true);
          }
     }, [isSuccess, dispatch]);

     return (
          <S.Container active={active}>
               <S.Overlay onClick={closePayment} />

               <S.Sidebar>
                    {isDelivery ? (
                         <form onSubmit={form.handleSubmit}>
                              <h3>Entrega</h3>

                              <Inputs
                                   name="remetente"
                                   label="Quem irá receber"
                                   type="text"
                                   value={capitalLetter(form.values.remetente)}
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
                                        type="text"
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
                                   <S.Button type="button" onClick={continuePayment}>
                                        Continuar com o pagamento
                                   </S.Button>
                                   <S.Button onClick={returnCart}>Voltar para o carrinho</S.Button>
                              </div>
                         </form>
                    ) : (
                         <>
                              {purchaseCompleted && isSuccess && data ? (
                                   <>
                                        <h3>Pedido realizado - {data.orderId}</h3>

                                        <S.Text>
                                             Estamos felizes em informar que seu pedido já está em
                                             processo de preparação e, em breve, será entregue no
                                             endereço fornecido.
                                        </S.Text>

                                        <S.Text>
                                             Gostaríamos de ressaltar que nossos entregadores não
                                             estão autorizados a realizar cobranças extras.
                                        </S.Text>

                                        <S.Text>
                                             Lembre-se da importância de higienizar as mãos após o
                                             recebimento do pedido, garantindo assim sua segurança e
                                             bem-estar durante a refeição.
                                        </S.Text>

                                        <S.Text>
                                             Esperamos que desfrute de uma deliciosa e agradável
                                             experiência gastronômica. Bom apetite!
                                        </S.Text>

                                        <S.ButtonLink to="/" onClick={closePayment}>
                                             Concluir
                                        </S.ButtonLink>
                                   </>
                              ) : (
                                   <form onSubmit={form.handleSubmit}>
                                        <h3>
                                             Pagamento - Valor a pagar{' '}
                                             {formatPrice(getTotalPrice(items))}
                                        </h3>

                                        <Inputs
                                             name="nomeCartao"
                                             label="Nome no cartão"
                                             type="text"
                                             value={capitalLetter(form.values.nomeCartao)}
                                             onChange={form.handleChange}
                                             onBlur={form.handleBlur}
                                             class={checkInputHasError('nomeCartao') ? 'error' : ''}
                                        />

                                        <S.GroupInputs>
                                             <Inputs
                                                  name="numeroCartao"
                                                  label="Número do cartão"
                                                  type="text"
                                                  size={228}
                                                  value={form.values.numeroCartao}
                                                  onChange={form.handleChange}
                                                  onBlur={form.handleBlur}
                                                  class={
                                                       checkInputHasError('numeroCartao')
                                                            ? 'error'
                                                            : ''
                                                  }
                                                  mask="0000 0000 0000 0000"
                                             />

                                             <Inputs
                                                  name="cvvCartao"
                                                  label="CVV"
                                                  type="number"
                                                  size={87}
                                                  value={form.values.cvvCartao}
                                                  onChange={form.handleChange}
                                                  onBlur={form.handleBlur}
                                                  class={
                                                       checkInputHasError('cvvCartao')
                                                            ? 'error'
                                                            : ''
                                                  }
                                                  mask="000"
                                             />
                                        </S.GroupInputs>

                                        <S.GroupInputs>
                                             <Inputs
                                                  name="mesCartao"
                                                  label="Mês de vencimento"
                                                  type="number"
                                                  size={155}
                                                  value={form.values.mesCartao}
                                                  onChange={form.handleChange}
                                                  onBlur={form.handleBlur}
                                                  class={
                                                       checkInputHasError('mesCartao')
                                                            ? 'error'
                                                            : ''
                                                  }
                                                  mask="00"
                                             />
                                             <Inputs
                                                  name="anoCartao"
                                                  label="Ano de vencimento"
                                                  type="number"
                                                  size={155}
                                                  value={form.values.anoCartao}
                                                  onChange={form.handleChange}
                                                  onBlur={form.handleBlur}
                                                  class={
                                                       checkInputHasError('anoCartao')
                                                            ? 'error'
                                                            : ''
                                                  }
                                                  mask="00"
                                             />
                                        </S.GroupInputs>

                                        <div className="buttons">
                                             <S.Button
                                                  type="submit"
                                                  disabled={isLoading}
                                                  title="Clique aqui para finalizar a compra"
                                             >
                                                  {isLoading
                                                       ? 'Finalizando compra...'
                                                       : 'Finalizar pagamento'}
                                             </S.Button>
                                             <S.Button onClick={() => setIsDelivery(true)}>
                                                  Voltar para a edição de endereço
                                             </S.Button>
                                        </div>
                                   </form>
                              )}
                         </>
                    )}
               </S.Sidebar>
          </S.Container>
     );
};

export default Payment;
