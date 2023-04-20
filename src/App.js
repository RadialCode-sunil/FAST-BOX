import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Hero from './components/Hero';
import Airtable from './components/Airtable';
import How_Fast from './components/How_Fast';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Van from './components/Van';
import Specialties from './components/Specialties';
import { Navbar } from 'react-bootstrap';
import { Calculate } from './components/Calculate';
import Follow_section from './components/Follow_section';
import What_our_section from './components/What_our_section';
import Footer from './components/Footer';


function App() {
  return (
    <div className=' overflow-hidden'>    
      <Hero />
      <Airtable />
      <How_Fast />
      <Van />
      <Specialties/>
    
      <Navbar />
      <Calculate />
      <Follow_section />
      <What_our_section />
      <Footer />
    </div>
  );
}

export default App;
