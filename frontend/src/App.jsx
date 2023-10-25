import { useEffect } from 'react'
import './App.css'

function App() {
  useEffect(() => {
    fetch('http://localhost:3000/api/test')
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error('Error fetching data: ', error));
  }, []);

  return (
    <div className="App">
      <h1>Tic Tac Toe</h1>
    </div>
  );
}

export default App;