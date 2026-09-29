import ReactDOM from 'react-dom/client';
import CounterApp from './components/01.CounterApp';
import RandomNumber from './components/02.RandomNumber';
import FormComponent from './components/03.FormComponent';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <CounterApp/>
  <RandomNumber/>
  <FormComponent/>
  </>
  

);


