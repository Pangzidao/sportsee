import { getUserPerformance } from "../userData";
import { useState, useEffect } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis} from 'recharts';


function PerformanceGraph(props){
    const [performanceData, setPerformanceData] = useState('');
    const id = props.id
    useEffect(() => {
        getUserPerformance(id).then((data) => {
          setPerformanceData(data);
        });
      }, [id]);

      return(
        <RadarChart cx={300} cy={250} outerRadius={150} width={600} height={500} data={performanceData}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis angle={30} domain={[0, 250]} />
            <Radar name="Subjects" dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
        </RadarChart>
      )
    
}

export default PerformanceGraph

