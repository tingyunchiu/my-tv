import React, { useState, useEffect, useRef } from 'react';
import './App.css';

function App() {
  const [currentChannel, setCurrentChannel] = useState(27);
  const [nextChannel, setNextChannel] = useState('');
  const searchInput = useRef(null);

  const validChannel = (event) => {
    setNextChannel(event.target.value.match(/[0-9]+/gm))
  }

  const switchChannel = (nextChannel) => {
    if (nextChannel >=2 && nextChannel <= 150) {
      setCurrentChannel(nextChannel)
      setNextChannel('')
    } else {
      setNextChannel('')
    }
  }

  const goToChannel = (event) => {
    if (event.key === 'Enter'){
      switchChannel(nextChannel)
    }
  }

  useEffect(() => {
    searchInput.current.focus();
    const timeOutId = setTimeout(
      () => {
        switchChannel(nextChannel)
      },
    2000);
    return () => clearTimeout(timeOutId);
  }, [nextChannel]);

  return (
    <div className="App">
      <div className="header">
        <div>
          Current Channel: {currentChannel}
        </div>
        <div>
          <input
            type="text"
            className="input"
            ref={searchInput}
            value = {nextChannel? nextChannel : ''}
            onChange={(event) => validChannel(event)}
            onKeyDown={(event) => goToChannel(event)}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
