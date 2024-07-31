import { useContext } from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Widget from './components/Widget/Widget';
import { ContextProvide, CreateContext } from './context/Context';

function App() {
  const {open} = useContext(CreateContext)
  console.log(open)
  return (
    <div className="">
      <ContextProvide >

        <Navbar />
        <Hero />
        <Widget />
      </ContextProvide>
    </div>
  );
}

export default App;
