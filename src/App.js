import './styles/App.scss';
import Navbar from './components/section_1_navbar.js';
import Landing_page from './components/section_2_landing_page.js';

function App() {
  return (
    <div className="font-body static">
      <Navbar className="absolute"/>
      <Landing_page/>
    </div>
  );
}

export default App;
