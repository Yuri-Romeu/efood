import * as S from './styles';
import logo from '../../assets/images/logo.png';
import instagram from '../../assets/images/instagram.png';
import facebook from '../../assets/images/facebook (4).png';
import twitter from '../../assets/images/twitter.png';
import { Link } from 'react-router-dom';

const Footer = () => {
     return (
          <S.Footer>
               <Link to="/">
                    <S.Logo src={logo} alt="Logo efood" />
               </Link>
               <S.SocialMedia>
                    <a href="/">
                         <img src={instagram} alt="" />
                    </a>
                    <a href="/">
                         <img src={facebook} alt="" />
                    </a>
                    <a href="/">
                         <img src={twitter} alt="" />
                    </a>
               </S.SocialMedia>

               <S.Text>
                    A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade
                    pela entrega, qualidade dos produtos é toda do estabelecimento contratado
               </S.Text>
          </S.Footer>
     );
};

export default Footer;
