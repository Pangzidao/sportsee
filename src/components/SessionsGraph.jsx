import { LineChart, Line, XAxis, YAxis,Tooltip} from 'recharts';
import { useState } from 'react';
import { useEffect } from 'react';
import { getUserSession } from '../userData';
import styles from '../styles/SessionsGraph.module.css'

function SessionsGraph(props){
    const [sessionsData, setSessionsData] = useState('');
    const id = props.id
    useEffect(() => {
        getUserSession(id).then((data) => {
          setSessionsData(data);
        });
      }, [id]);
    
    return(
      <div className={styles.container}>
        <h2 className={styles.title}>Durée moyenne des sessions</h2>
        <LineChart width={500} height={300} data={sessionsData}>
          <XAxis className={styles.xAxis} axisLine={false} tickLine={false} dataKey="day" textDecoration={{color:'white'}}/>
          <YAxis hide={true} padding={{ bottom:30}}/>
          <Tooltip />
          <Line type="monotone" dataKey="minutes" stroke="#FFFFFF" />
        </LineChart>
      </div>
      
    ) 
}

export default SessionsGraph