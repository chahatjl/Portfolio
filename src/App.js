import { useEffect, useState } from "react";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";
import { ThreeDots } from "react-loader-spinner";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [darkmode, setDarkMode] = useState(false);

  // Simulate data loading with useEffect
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Change this to your desired loading time
  }, []);

  return (
    <div className={`h-screen w-full ${darkmode ?  "dark"  : ""}`}>
      {!isLoading && <NavBar darkmode={darkmode} setDarkMode={setDarkMode} />}

      {isLoading ? (
        <div className="flex items-center justify-center bg-black w-screen h-screen">
          <ThreeDots
            height="180"
            width="180"
            radius="9"
            color="#808080"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />
        </div>
      ) : (
        <div className={`   lg:px-16 w-full ${darkmode ?  "dark"  : ""} dark:bg-gradient-to-b from-black via-black to-gray-800`}>
          <Home />
          <About />
          <Portfolio  />
          <Experience  />
          <Contact />
          <SocialLinks />
        </div>
      )}
    </div>
  );
}

export default App;
