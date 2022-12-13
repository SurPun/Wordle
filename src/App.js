import { useState, useEffect } from "react";
import Wordle from "./components/Wordle";

function App() {
  const [solution, setSolution] = useState(null);

  //  To Run Local Server 3001 Api -
  //  npx json-server ./data/db.json --port 3001
  /*
  useEffect(() => {
    fetch("http://localhost:3001/solutions")
      .then((res) => res.json())
      .then((json) => {
        // Get random int between 0 & 14
        const randomSolution = json[Math.floor(Math.random() * json.length)];

        console.log(json);

        // Update State
        setSolution(randomSolution.word);
      });
  }, [setSolution]);
  */

  // GitHub API
  useEffect(() => {
    fetch("https://surpun.github.io/Wordle-Json-Data/db.json")
      .then((res) => res.json())
      .then((json) => {
        return json.solutions;
      })
      .then((data) => {
        // Get random int between 0 & 14
        const randomSolution = data[Math.floor(Math.random() * data.length)];

        // Update State
        setSolution(randomSolution.word);
      });
  }, [setSolution]);

  return (
    <div className="App">
      <h1>Wordle</h1>

      {solution && <Wordle solution={solution} />}
    </div>
  );
}

export default App;
