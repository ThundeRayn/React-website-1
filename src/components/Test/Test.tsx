import React, { useEffect, useState } from 'react'
import axios, { CanceledError } from 'axios';
import styles from './Test.module.css';

interface User{
  id:number;
  name: string;
}

const Test = () => {


  const [users,getUsers] = useState<User[]>([]);
  const [error,SetError] = useState('');
  const [isLoading,setLoading] = useState(false);

  useEffect(()=>{
    const controller = new AbortController();

    setLoading(true);
    axios
      .get<User[]>('https://jsonplaceholder.typicode.com/users', {signal: controller.signal})
      .then((res) => {
        getUsers(res.data);
        setLoading(false);
      })
      .catch((err) =>{ 
        if (err instanceof CanceledError) return;
        SetError(err.message);
        setLoading(false);
      });

    return ()=>controller.abort();
  },[])


  return (
    <div className={styles['container']}>
      Testtttttttttttttttttttttt

      {error && <p className="test-danger">{error}</p>}
      {isLoading && <div className="spinner-border"></div>}
      <ul>
        {users.map(user=> 
          <li key={user.id}>{user.name}</li>
        )}
      </ul>
      
    </div>
  )
}

export default Test;