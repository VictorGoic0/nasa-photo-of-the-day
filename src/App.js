import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
import Card from "./components/Card";
import Error from "./components/Error";
import "./App.css";

function App() {
  const [response, setResponse] = useState({});
  const [error, setError] = useState(null);
  const [isFetching, setIsFetching] = useState(false);
  useEffect(() => {
    setIsFetching(true);
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then(res => {
        console.log(res);
        setResponse({ ...res.data });
        setIsFetching(false);
      })
      .catch(err => {
        console.error(err);
        setError(err.response);
        setIsFetching(false);
      });
  }, []);
  if (error) {
    return <Error error={error} />;
  } else if (isFetching) {
    return <Loader type="Oval" color="#0a4e8a" height={120} width={80} />;
  } else {
    return (
      <div className="App">
        <Card apod={response} />
      </div>
    );
  }
}

export default App;
