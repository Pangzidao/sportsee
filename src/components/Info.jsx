import styles from '../styles/Info.module.css'
import { getUserData } from '../userData';
import { useState, useEffect } from 'react';


function Info(props){
    const [keyData, setKeyData] = useState('');
    const id = props.id
    const type = props.type
    useEffect(() => {
        getUserData(id).then((data) => {
          setKeyData(data.keyData)
        });
      }, [id]);
    return(
        <div className={styles.container}>
            <img src={props.logo} alt={props.name} className={styles.logo} style={{backgroundColor: props.logoBackground}}/>
            <h2>{keyData[type]}{props.unit}</h2>
            <p>{props.name}</p>
        </div>
    )
}

export default Info