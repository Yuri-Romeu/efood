import { Container, Logo as LogoStyled, Titulo } from './styles';
import logo from '../../assets/images/logo.png';

const Hero = () => {
     return (
          <Container>
               <LogoStyled>
                    <img src={logo} alt="Logo efood" />
               </LogoStyled>

               <Titulo>Viva experiências gastronômicas no conforto da sua casa</Titulo>
          </Container>
     );
};

export default Hero;
