import React, {useState, useEffect, useCallback} from 'react';
import Channel from './Channel.js'
import './App.css';

function App() {
  const [currentChannel, setCurrentChannel] = useState(27);

  const goToChannel = (channel) => {
    setCurrentChannel(channel)
  }

  return (
    <div className="App">
      <Channel currentChannel = {currentChannel} goToChannel = {goToChannel} />
    </div>
  );
}

export default App;
