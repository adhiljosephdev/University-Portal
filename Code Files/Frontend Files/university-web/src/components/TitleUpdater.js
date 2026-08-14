import React, { useState, useEffect } from 'react';

function TitleUpdater() {

  const [clicks, setClicks] = useState(0);

  useEffect(() => {
    // This runs every time 'clicks' changes
    document.title = `Clicks: ${clicks}`;
  }, [clicks]); // Dependency array

  return (
    <button onClick={() => setClicks(clicks + 1)}>
      Clicks: {clicks}
    </button>
  );
}

export default TitleUpdater;