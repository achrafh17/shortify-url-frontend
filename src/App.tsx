import "./App.css";

import { useState } from "react";
function App() {
  const [inputurl, setinputurl] = useState("");
  const [shorturl, setShorturl] = useState("");
  const handlleshorturl = () => {
    fetch("http://localhost:3000/app", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url: inputurl }),
    })
      .then((response) => response.json())
      .then((data) => {
        setShorturl(data.shorturl);
      })
      .catch((err) => console.log(err));
    console.log(inputurl);
  };
  const copier=()=>{
    navigator.clipboard.writeText(shorturl)
 
  }
  return (
    <div className="App">
      <div className="main">
        <h1>shortify</h1>
        <p>Transform long URLs into compact aliases</p>
        <div className="input-button">
          <input onChange={(e) => setinputurl(e.target.value)} type="text" />
          <button onClick={handlleshorturl}>Shorten url</button>
          <h1>your shorten url is {shorturl}</h1>
          <button onClick={copier}> copier</button>
        </div>
      </div>
    </div>
  );
}

export default App;
