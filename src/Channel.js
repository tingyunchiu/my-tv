import React, {useState, useEffect, useCallback} from 'react';

function Channel({currentChannel, goToChannel}) {
  const [nextChannel, setNextChannel] = useState('');
  const [isFirst, setIsFirst] = useState(true);

  const handleUserKeyPress = useCallback(event => {
    setIsFirst(false);

    const { key } = event;

    const  reactionTime = setTimeout(() => {
      if ( key >=0 && key <= 9 ) {
        setNextChannel(prevNextChannel =>
          prevNextChannel? prevNextChannel + key : key
        );
      }

      if (key ==='Backspace') {
        setNextChannel(prevNextChannel =>
          prevNextChannel.length > 0
          ? prevNextChannel.slice(0, prevNextChannel.length - 1)
          : prevNextChannel
        )
      }
    }, 2000)

    if (key ==='Enter') {
      clearTimeout(reactionTime)
    }
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', handleUserKeyPress);

    // prevent first render useEffect
    if (!isFirst && nextChannel >= 2 && nextChannel <= 150){
      goToChannel(nextChannel)
    }else{
      goToChannel(currentChannel)
    }

    return () => {
      window.removeEventListener('keydown', handleUserKeyPress);
    };
  }, [nextChannel, handleUserKeyPress]);

  return (
    <div className="App">
      <div>
        Current Channel: {currentChannel}
      </div>
      <div>
        Going to: {nextChannel}
      </div>
    </div>
  );
}

export default Channel;
