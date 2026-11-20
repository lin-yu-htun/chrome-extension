import { useEffect, useState } from "react";

const WeatherWidget = () => {
  const [temp, setTemp] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchWeather = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          "https://api.open-meteo.com/v1/forecast?latitude=16.8053&longitude=96.1561&current=temperature_2m",
        );
        const data = await response.json();
        setTemp(data.current.temperature_2m);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchWeather();
  }, []);
  return (
    <>
      {isLoading ? (
        <span>Loading....</span>
      ) : (
        <div className="weather-widget">
          <div className="weather-content">
            <span className="weather-icon">🌤️</span>
            <span className="temperature">{temp} C</span>
            <span className="location">Yangon</span>
          </div>
        </div>
      )}
    </>
  );
};

export default WeatherWidget;
