 
import ButtonWidget from './components/Widget/ButtonWidget';
import Widget from './components/Widget/Widget';
import { ContextProvide } from './context/Context';

function App() {
 
  return (
    <div className='w-screen h-screen'>
      <ContextProvide >
        {/* <ButtonWidget /> */}
        <Widget />
      </ContextProvide>
    </div>
  );
}

export default App;
