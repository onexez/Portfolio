import "./App.scss";
import { About } from "./components/about/About";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { Home } from "./components/home/Home";
import { Projects } from "./components/projects/Projects";
import { BurgerMenu } from "./components/header/BurgerMenu";
import { useState } from "react";

function App() {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = isActive ? "active" : "inactive";

  return (
    <>
      <Header isActive={isActive} setIsActive={setIsActive} />
      <BurgerMenu toggleMenu={toggleMenu} isActive={isActive} setIsActive={setIsActive} />
      <Home />
      <About />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
