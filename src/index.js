import ReactDOM from 'react-dom/client';
import CounterApp from './components/01.CounterApp';
import RandomNumber from './components/02.RandomNumber';
import FormComponent from './components/03.FormComponent';
import TwoInputForm from './components/04.TwoInputForm';
import AddTwoNumbers from './components/05.AddTwoNumbers';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <CounterApp/>
  <RandomNumber/>
  <FormComponent/>
  <TwoInputForm/>
  <AddTwoNumbers/>
  </>
  

);


