import { useMemo, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { GlobalContext } from "./Common/GlobalContext";
import {
  About,
  Contact,
  Experience,
  Footer,
  Hero,
  Navbar,
  Tech,
} from "./Components";
import { GlobalContextModel } from "./Models/GlobalContextModel";

const App = (): JSX.Element => {
  const [openLaptop, setOpenLaptop] = useState<boolean>(true);

  const contextValue = useMemo<GlobalContextModel>(
    () => ({ setLaptopState: setOpenLaptop }),
    []
  );

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-background-dark1">
        <GlobalContext.Provider value={contextValue}>
          <Navbar />
          <Hero isLaptopOpen={openLaptop} />
          <About />
          <Experience />
          <div className="bg-tech-pattern bg-cover bg-no-repeat bg-center z-10">
            <Tech />
          </div>
          <div className="relative z-0">
            <Contact />
            <Footer />
          </div>
        </GlobalContext.Provider>
      </div>
    </BrowserRouter>
  );
};

export default App;
