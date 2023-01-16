import { getUserPerformance } from "../userData";

function PerformanceGraph(props){
    const id = props.id
    getUserPerformance(id).then((data)=> console.log(data))
}

export default PerformanceGraph

