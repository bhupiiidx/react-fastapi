import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import axios from "axios";

function App() {
  useEffect(() => {
    // fetch(process.env.REACT_APP_HOST_PATH, {
    //   mode: "no-cors",
    //   headers: {
    //     "Access-Control-Allow-Origin": "*",
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((data) => console.log(data))
    //   .catch((err) => console.error(err));
    var apiurl1 = process.env.REACT_APP_HOST_PATH;
    var apiurl2 = process.env.REACT_APP_HOST_PATH2 + "apis/add_sum/";

    //   axios(config).then(function(response) {
    //     console.log(JSON.stringify(response.data));
    // }).catch(function (error) {
    //     console.log(error);
    // });

    var FormData = require("form-data");
    var data_1 = new FormData();
    data_1.append("x", "10");
    data_1.append("y", "20");

    var config = {
      method: "post",
      url: apiurl2,
      headers: {},
      data: data_1,
    };
    axios(config)
      .then(function (response) {
        console.log("DJANGO Backend", JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });

    axios({
      url: apiurl1,
      method: "get",
      headers: {},
    })
      .then(function (response) {
        console.log("FastAPI Backend", JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
