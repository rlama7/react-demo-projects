import { useState } from 'react';
import GridLights from './component/GridLights';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="">
        <GridLights />
      </div>
    </>
  );
}

export default App;
