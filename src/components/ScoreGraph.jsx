import { useState, useEffect } from 'react';
import { getUserData, getUserDataMock } from '../userData';
import { PieChart, Pie, ResponsiveContainer} from 'recharts';

class UserScore{
    constructor(name, value){
     this.name = name
     this.value = value
    }
 }

function ScoreGraph(props){
    const [scoreData, setScoreData] = useState('');
    const id = props.id

    let APIconnection = props.APIconnection

    useEffect(() => {
        if(APIconnection === true){
            const dataScore = []
            getUserData(id).then((data) => {
                dataScore.push(new UserScore("score", data.todayScore * 100))
                dataScore.push(new UserScore("score", 100 - data.todayScore * 100))
                setScoreData(dataScore)
            })
        }else{
            const dataScore = []
            const data = getUserDataMock(id)
            dataScore.push(new UserScore("score", data.todayScore * 100))
            dataScore.push(new UserScore("score", 100 - data.todayScore * 100))
            setScoreData(dataScore)   
        }      
    }, [id,APIconnection]);
    return(
        <ResponsiveContainer width='100%' height={200}>
            <PieChart width={730} height={250}>
            <Pie data={scoreData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
            </PieChart>
        </ResponsiveContainer>
        
    )

}

export default ScoreGraph