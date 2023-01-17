import { useState, useEffect } from 'react';
import { getUserData } from '../userData';
import { PieChart, Pie} from 'recharts';

class UserScore{
    constructor(name, value){
     this.name = name
     this.value = value
    }
 }

function ScoreGraph(props){
    const [scoreData, setScoreData] = useState('');
    const id = props.id

    useEffect(() => {
        getUserData(id).then((data) => {
        const dataScore = []
  
        dataScore.push(new UserScore("score", data.todayScore * 100))
          dataScore.push(new UserScore("score", 100 - data.todayScore * 100))
          setScoreData(dataScore)
        });
    }, [id]);
    return(
        <PieChart width={730} height={250}>
            <Pie data={scoreData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
        </PieChart>
    )

}

export default ScoreGraph