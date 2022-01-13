import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard firstName= "Pedro" lastName = "Valladares" age = {28} hColor = {"Black"}/>
      <PersonCard firstName= "Jane" lastName = "Doe" age = {45} hColor = {"Black"}/>
      <PersonCard firstName= "John" lastName = "Smith" age = {88} hColor = {"Brown"}/>
      <PersonCard firstName= "Maria" lastName = "Smith" age = {62} hColor = {"Black"}/>
    </div>
  );
}

export default App;
