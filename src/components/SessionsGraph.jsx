import { LineChart, Line, XAxis, YAxis,Tooltip, ResponsiveContainer} from 'recharts';
import { useState } from 'react';
import { useEffect } from 'react';
import { getUserSession, getUserSessionMock } from '../userData';
import styles from '../styles/SessionsGraph.module.css'

function SessionsGraph(props){
    const [sessionsData, setSessionsData] = useState('');
    const id = props.id
    let APIconnection = props.APIconnection
    useEffect(() => {
      if(APIconnection === true){
        getUserSession(id).then((data) => {
          setSessionsData(data);
        });
      }else{
        const data = getUserSessionMock(id)
        setSessionsData(data);
      }

        
      }, [id, APIconnection]);
    
    return(
      <div className={styles.container}>
        <h2 className={styles.title}>Durée moyenne des sessions</h2>
        <ResponsiveContainer width='100%' height={200}>
            <LineChart width={500} height={300} data={sessionsData}>
              <XAxis className={styles.xAxis} axisLine={false} tickLine={false} dataKey="day" textDecoration={{color:'white'}}/>
              <YAxis hide={true} padding={{ bottom:30}}/>
              <Tooltip />
              <Line type="monotone" dataKey="minutes" stroke="#FFFFFF" />
            </LineChart>
          </ResponsiveContainer>
      </div>
      
    ) 
}

export default SessionsGraph