import { getUserPerformance, getUserPerformanceMock } from "../userData";
import { useState, useEffect } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer} from 'recharts';


function PerformanceGraph(props){
    const [performanceData, setPerformanceData] = useState('');
    const id = props.id
    let APIconnection = props.APIconnection
    useEffect(() => {
      if(APIconnection === true){
        getUserPerformance(id).then((data) => {
          setPerformanceData(data);
        });
      }else{
        const data = getUserPerformanceMock(id)
        setPerformanceData(data)
      }
      }, [id,APIconnection ]);


      return(
        <ResponsiveContainer width='100%' height={450}>
          <RadarChart cx={300} cy={250} outerRadius={150} width={300} height={300} data={performanceData}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis angle={30} domain={[0, 250]} />
            <Radar name="Subjects" dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
          </RadarChart>
        </ResponsiveContainer>

        
      )
    
}

export default PerformanceGraph

