import * as S from './styles';
import logo from '../../assets/images/logo.png';

const Hero = () => {
     return (
          <S.Container>
               <S.Logo>
                    <img src={logo} alt="Logo efood" />
               </S.Logo>

               <S.Title>Viva experiências gastronômicas no conforto da sua casa</S.Title>
          </S.Container>
     );
};

export default Hero;
