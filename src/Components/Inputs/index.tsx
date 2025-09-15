import { Container, Input } from './styles';

type Props = {
     name: string;
     label: string;
     type: string;
     size?: number;
};

const Inputs = ({ name, label, type, size }: Props) => {
     return (
          <Container>
               <label htmlFor={name}>{label}</label>
               <Input type={type} id={name} size={size} />
          </Container>
     );
};

export default Inputs;
