import { useEffect, useState } from "react";

const ChuckNorrisJoke = () => {
  const [joke, setJoke] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    // Fetch a new joke initially
    fetchJoke();

    // Fetch a new joke every 15 seconds
    const interval = setInterval(fetchJoke, 21000);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  const fetchJoke = async () => {
    try {
      const response = await fetch("https://api.chucknorris.io/jokes/random");
      const data = await response.json();
      setJoke(data.value);
    } catch (error) {
      console.error("Error fetching joke:", error);
      setError(true);
    }
  };

  return (
    <div className="carousel">
      <div className="slide">
        <div className="joke">
          {error ? "This is a chuck norris joke.😂" : joke + '😂'}
        </div>
      </div>
    </div>
  );
};

export default ChuckNorrisJoke;
