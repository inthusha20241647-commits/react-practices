import ReactDOM from 'react-dom/client';
import CounterApp from './components/01.CounterApp';
import RandomNumber from './components/02.RandomNumber';
import FormComponent from './components/03.FormComponent';
import TwoInputForm from './components/04.TwoInputForm';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <CounterApp/>
  <RandomNumber/>
  <FormComponent/>
  <TwoInputForm/>
  </>
  

);


