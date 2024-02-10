import "./App.scss";
import { About } from "./components/about/About";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { Home } from "./components/home/Home";
import { Projects } from "./components/projects/Projects";

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
