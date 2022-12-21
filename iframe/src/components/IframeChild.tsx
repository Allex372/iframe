import React, { useEffect, useState } from 'react';
export const IframeChild = () => {
  const [recievedMessage, setRecievedMessage] = useState<string | null>(null);

  const sendMessage = () => {
    window.parent.postMessage('Hi dad!', 'http://localhost:3000');
  };

  useEffect(() => {
    window.addEventListener('message', function (e) {
      console.log(e);
      if (e.origin !== 'http://localhost:3000') return;
      if (typeof e.data == 'string') {
        setRecievedMessage('Got this message from parent: ' + e.data);
      }
    });
    console.log(recievedMessage);
  }, [recievedMessage]);

  return (
    <div>
      <h2>Child iFrame</h2>
      <button onClick={sendMessage}>Send message to parent</button>
      <p>{recievedMessage}</p>
    </div>
  );
};
