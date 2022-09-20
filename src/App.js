import './style/CSS/App.css';
import './style/components/app.sass';
import Sidebar from './components/Sidebar';
import MainContext from './components/MainContext';


function App() {
  return (
    <div id="portfolio">
      <h1> Marcus Oliveira</h1>
      <Sidebar/>
      <MainContext/>
    </div>
  );
}

export default App;
