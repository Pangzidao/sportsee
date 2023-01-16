import './App.css';
import ActivityGraph from './components/ActivityGraph';
import { getUserData } from './userData';
import { useState, useEffect } from 'react';
import SessionsGraph from './components/SessionsGraph';
import PerformanceGraph from './components/PerformanceGraph';

let id = 18


function App() {
  const [firstName, setFirstName] = useState('');

  useEffect(() => {
    getUserData(id).then((data) => {
      console.log(data)
      setFirstName(data.userInfos.firstName);
    });
  }, []);

  return (
    <div>
      <h1>{firstName}</h1>
      <ActivityGraph id={id} />
      <SessionsGraph id={id} />
      <PerformanceGraph id={id} />
    </div>
  )
}


export default App;
