import classes from "./App.module.css";
import Context from "./components/Context";
import Header from "./components/Header";
import Meals from "./components/Meals";
import About from "./components/About";
import { useRef } from "react";
import Contact from "./components/Contact";

function App() {
  const mealsRef = useRef();
  const aboutRef = useRef();
  const contactRef = useRef();

  const handleBackClick = () => {
    mealsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleBackClick2 = () => {
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleBackClick3 = () => {
    contactRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={classes.containers}>
      <Header
        onBackClick={handleBackClick}
        onBackClick2={handleBackClick2}
        onBackClick3={handleBackClick3}
      />
      <Context />
      <Meals ref={mealsRef} />
      <About ref={aboutRef} />
      <Contact ref={contactRef} />
    </div>
  );
}

export default App;
