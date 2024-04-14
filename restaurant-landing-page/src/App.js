import './App.css';
import  Hero  from './components/Hero';
import  About  from './components/About';
import  Work  from './components/Work/Work';
import  Testimonial  from './components/Testimonial/Testimonial';
import { Question } from './components/Question';
import { Footer } from './components/Footer';

function App() {
  return (
    <div>
      <Hero />
      <About />
      <Work />
      <Testimonial />
      <Question />
      <Footer />
    </div>
  );
}

export default App;
