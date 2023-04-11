import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { Navbar } from 'react-bootstrap';
import { Calculate } from './components/Calculate';


function App() {
  return (
    <div>
      <Navbar />
      <Calculate />
    </div>
  );
}

export default App;
