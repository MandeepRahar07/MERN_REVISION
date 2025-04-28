import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState(""); // Proper state initialization
  const [datajson, setDataJson] = useState([]);
  const fetchdata = async () => {
    try {
      const response = await axios.get('http://localhost:3000/');
      setData(response.data);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };


  const fetchjsondata = async () => {
    try {
      const response = await axios.get('http://localhost:3000/data');
      setDataJson(response.data);
      console.log(response.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchdata();
    fetchjsondata();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {data ? data : "Loading..."} {/* Fallback while fetching data */}
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
