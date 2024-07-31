import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Widget from './components/Widget/Widget';
import { ContextProvide } from './context/Context';

function App() {
 
  return (
    <div>
      <ContextProvide >
        <Navbar />
        <Hero />
        <Widget />
      </ContextProvide>
    </div>
  );
}

export default App;
