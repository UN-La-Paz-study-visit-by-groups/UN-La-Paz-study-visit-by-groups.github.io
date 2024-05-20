import { BrowserRouter } from "react-router-dom";

import { Banner, NavBar } from "./components";

import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-gradient-to-l from-gradient_initial via-gradient_final to-gradient_initial">
        <div className="relative z-0">
          <NavBar />
          <Banner />
        </div>
      </div>
      <iframe
        id="funding"
        title="¡Estudiantes del departamento del Cesar en Alemania!"
        width="100%"
        height="410"
        src="https://vaki.co/iframe/lQBstsOFMgAKebhQdCYO"
        className="bg-gradient-to-l from-gradient_initial via-gradient_final to-gradient_initial"
      ></iframe>
    </BrowserRouter>
  );
};

export default App;
