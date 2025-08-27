import Hero from './containers/Hero';
import { GlobalCSS } from './styles';

function App() {
     return (
          <>
               <GlobalCSS />
               <Hero />
               <div className="container"></div>
          </>
     );
}

export default App;
