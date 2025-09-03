import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Perfil from './pages/Perfil';

const Rotas = () => {
     return (
          <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/product/:id" element={<Perfil />} />
          </Routes>
     );
};

export default Rotas;
