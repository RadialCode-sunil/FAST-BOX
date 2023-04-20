import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { Navbar } from 'react-bootstrap';
import { Calculate } from './components/Calculate';
import Follow_section from './components/Follow_section';
import What_our_section from './components/What_our_section';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <Navbar />
      <Calculate />
      <Follow_section />
      <What_our_section />
      <Footer />
    </div>
  );
}

export default App;
