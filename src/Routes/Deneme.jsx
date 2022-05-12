import {useEffect, useState} from 'react'
import axios from 'axios';

function Deneme() {
    const[users, setUsers]= useState([]);
    const[isloading, setIsloading]= useState(true);
   
    useEffect(()=>{
    axios('https://jsonplaceholder.typicode.com/users')
    .then((res)=> (setUsers(res.data)))
    .catch((e)=>console.log(e))
    .finally(()=> setIsloading(false))
    }, [])
  return (
    <div> 
        <h1>Users</h1>
        {isloading && <div>Loading...</div>}
        {users.map((user)=> <div key={user.id}>{user.name} </div> )}
    </div>
  )
}

export default Deneme
