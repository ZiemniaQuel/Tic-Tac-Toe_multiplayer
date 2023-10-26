import { useEffect } from 'react';
import io from 'socket.io-client';

function App() {
  useEffect(() => {
    // Connect to the Express server
    const socket = io('http://localhost:3000');

    socket.on('connect', () => {
      console.log('Connected to server');
    });

    // Cleanup on component unmount
    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div className="App">
      <h1>Socket.io with React</h1>
    </div>
  );
}

export default App;
