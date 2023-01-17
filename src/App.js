import './App.css';
import ActivityGraph from './components/ActivityGraph';
import { getUserData } from './userData';
import { useState, useEffect } from 'react';
import SessionsGraph from './components/SessionsGraph';
import PerformanceGraph from './components/PerformanceGraph';
import ScoreGraph from './components/ScoreGraph';
import Info from './components/Info';
import caloriesLogo from './assets/calories.png'
import glucidesLogo from './assets/glucides.png'
import lipidesLogo from './assets/lipides.png'
import proteinsLogo from './assets/proteins.png'

let id = 18


function App() {
  const [firstName, setFirstName] = useState('');

  useEffect(() => {
    getUserData(id).then((data) => {
      setFirstName(data.userInfos.firstName);
    });
  }, []);

  return (
    <div>
      <h1>{firstName}</h1>
      <ActivityGraph id={id} />
      <SessionsGraph id={id} />
      <PerformanceGraph id={id} />
      <ScoreGraph id={id} />
      <Info logo={caloriesLogo} name="Calories" logoBackground="#fbeaea" id={id} type="calorieCount" unit="kCal" />
      <Info logo={proteinsLogo} name="Proteines" logoBackground="#e9f4fb" id={id} type="proteinCount"unit="g" />
      <Info logo={glucidesLogo} name="Glucides" logoBackground="#fbf6e5" id={id} type="carbohydrateCount" unit="g" />
      <Info logo={lipidesLogo} name="Lipides" logoBackground="#fbeaef" id={id} type="lipidCount" unit="g" />

    </div>
  )
}


export default App;
