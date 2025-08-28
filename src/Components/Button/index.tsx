import { Botao } from './styles';

type Props = {
     children: string;
     clicked?: boolean;
};

const Button = ({ children, clicked }: Props) => {
     return <Botao clicked={clicked}>{children}</Botao>;
};

export default Button;
