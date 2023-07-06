import './App.scss';
import { About } from './components/about/About';
import { Header } from './components/header/Header';
import { Home } from './components/home/Home';
import { Portfolio } from './components/portfolio/Portfolio';

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Portfolio />
    </>
  );
}

export default App;
