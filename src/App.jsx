import { useEffect, useState } from "react";
import "./App.css";
import LearnexLogo from "./assets/learnex-logo-blue.png";
import Searchbox from "./components/Searchbox";
import WeatherWidget from "./components/WeatherWidget";

const App = () => {
  const [bgImage, setBgImage] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(
      "https://api.unsplash.com/photos/random?query=spiderman,wallpaper&orientation=landscape&client_id=fYdV276nqN3RmOduDShThwXXSbrGuDC9xk9EQQnt5nM",
    )
      .then((res) => res.json())
      .then((data) => {
        const image = new Image();

        image.src = data.urls.regular;

        image.onload = () => {
          setBgImage(data.urls.regular);
          setLoading(false);
        };

        image.onerror = () => {
          console.log("Image failed to load");
          setLoading(false);
        };
      })
      .catch((error) => {
        console.log("API Error:", error);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return (
      <div className="loading-container">
        <img
          src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif"
          alt="Loading"
        />
        <h2>Image Loading...</h2>
        <p>Please wait while we load your wallpaper.</p>
      </div>
    );
  }
  return (
    <div
      className="dashboard-container"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="overlay">
        <div className="top-right">
          <WeatherWidget />
        </div>
        <div className="center-content">
          <h1 className="greeting">
            Good {new Date().getHours() < 12 ? "Moring" : "Evening"}, Coder
          </h1>
          <Searchbox />
        </div>
        <div className="bottom-left">
          <img className="learnex-logo" src={LearnexLogo} alt="Learnex Logo" />{" "}
          <div className="brand-text">
            <span>Built In</span>
            <strong>Learnex React Course</strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
