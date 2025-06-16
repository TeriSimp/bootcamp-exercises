import React from 'react';

function App() {
  const currentHour = new Date().getHours();
  let greeting; 
  let color;

  if (currentHour >= 0 && currentHour < 12) {
    greeting = 'Good morning';
    color = 'red';
  } else if (currentHour >= 12 && currentHour < 18) {
    greeting = 'Good Afternoon';
    color = 'green';
  } else {
    greeting = 'Good evening';
    color = 'blue';
  }

  return (
    <h1 className="heading" style={{ color }}>
      {greeting}
    </h1>
  );
}

export default App;