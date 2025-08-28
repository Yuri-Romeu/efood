import Card from './Components/Card';
import Hero from './containers/Hero';
import { Cards, GlobalCSS, Principal } from './styles';

function App() {
     return (
          <>
               <GlobalCSS />
               <Hero />

               <Principal>
                    <Cards>
                         <Card />
                         <Card />
                         <Card />
                         <Card />
                    </Cards>
               </Principal>
          </>
     );
}

export default App;
