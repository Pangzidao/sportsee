import { LineChart, Line, XAxis, YAxis,Tooltip, Legend} from 'recharts';
import { useState } from 'react';
import { useEffect } from 'react';
import { getUserSession } from '../UserData';

function SessionsGraph(props){
    const [sessionsData, setSessionsData] = useState('');
    const id = props.id
    useEffect(() => {
        getUserSession(id).then((data) => {
          setSessionsData(data);
        });
      }, [id]);
    
    return(
        <LineChart
          width={500}
          height={300}
          data={sessionsData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
    ) 
}

export default SessionsGraph