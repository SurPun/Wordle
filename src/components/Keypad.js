import React, { useEffect, useState } from "react";

export default function Keypad({ usedKeys }) {
  const [letters, setLetters] = useState(null);

  //  To Run Local Server 3001 Api -
  //  npx json-server ./data/db.json --port 3001
  /*
  useEffect(() => {
    fetch("http://localhost:3001/letters")
      .then((res) => res.json())
      .then((json) => {
        setLetters(json);
      });
  }, []);
  */

  // GitHub API
  useEffect(() => {
    fetch("https://surpun.github.io/Wordle-Json-Data/db.json")
      .then((res) => res.json())
      .then((json) => {
        return json.letters;
      })
      .then((data) => {
        setLetters(data);
      });
  }, []);

  return (
    <div className="keypad">
      {letters &&
        letters.map((l) => {
          const color = usedKeys[l.key];
          return (
            <div key={l.key} className={color}>
              {l.key}
            </div>
          );
        })}
    </div>
  );
}
