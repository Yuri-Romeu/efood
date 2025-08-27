import Card from './Components/Card';
import Listagem from './Components/Listagem';
import Hero from './containers/Hero';
import { GlobalCSS } from './styles';

function App() {
     return (
          <>
               <GlobalCSS />
               <Hero />
               <Listagem />
          </>
     );
}

export default App;
