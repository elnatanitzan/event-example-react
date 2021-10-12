import './App.scss';
import StateWitoutBind from './StateWitoutBind';
import SubmitForm from './SubmitForm';

function App() {
  return (
    <div className="container">
      <h1>Events:</h1>
      <SubmitForm/>
      <StateWitoutBind/>
    </div>
  );
}

export default App;
