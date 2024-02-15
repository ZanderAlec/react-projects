import './App.css';
import { Home } from './components/Home';
import { Pricing } from './components/Pricing.js';
import { Services } from './components/Services.js';
import { UseCases } from './components/UseCases.js';

import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div >

        <Routes>
          <Route path = "/" element = {<Home />}/>
          <Route path = "/pricing" element = {<Pricing />}/>
          <Route path = "/services" element = {<Services />}/>
          <Route path = "/useCases" element = {<UseCases />}/>
        </Routes>
    </div>
  );
}

export default App;
