import { Button as ButtonStyled } from './styles';

type Props = {
     children: string;
     clicked?: boolean;
};

const Button = ({ children, clicked }: Props) => {
     return <ButtonStyled clicked={clicked}>{children}</ButtonStyled>;
};

export default Button;
