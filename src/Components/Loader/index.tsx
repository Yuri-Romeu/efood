import { DotLoader } from 'react-spinners';
import { Container } from './styles';
import { Colors } from '../../styles';
const Loader = () => {
     return (
          <Container>
               <DotLoader color={Colors.salmon} />
          </Container>
     );
};

export default Loader;
