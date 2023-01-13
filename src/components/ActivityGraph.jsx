import { BarChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Bar } from 'recharts';
import { useState, useEffect } from 'react';
import { getUserActivity } from '../UserData';

function ActivityGraph(props){
    const [activityData, setActivityData] = useState('');
    const id = props.id
    useEffect(() => {
        getUserActivity(id).then((data) => {
          setActivityData(data);
        });
      }, [id]);
    
    return(
        <BarChart width={730} height={250} data={activityData}>
            <CartesianGrid y="kilogram" vertical={false} strokeDasharray="4"/>
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="kilogram" fill="#8884d8" />
            <Bar dataKey="calories" fill="#82ca9d" />
        </BarChart>
    ) 
}

export default ActivityGraph