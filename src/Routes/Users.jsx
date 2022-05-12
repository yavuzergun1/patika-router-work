import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { useState, useEffect} from 'react'
import axios from 'axios';


function Users() {
    const[users, setUsers]= useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios('https://jsonplaceholder.typicode.com/users')
        .then((res)=> (setUsers(res.data)))
        .catch((e)=>console.log(e))
        .finally(()=> setIsLoading(false))
    
      
    }, [])
    

  return (
    <div>
     <div> 
        <h1>Users</h1>
<ul> 
        {isLoading && <div>Loading...</div>}
        {users.map((user)=> 
        <NavLink 
        style={({isActive}) =>{
          return {
            display: "block",
            margin: "1rem 0",
            color: isActive ? "red" : "" };                    
        }}

        key={user.id} 
        to={`/user/${user.id}`} >{user.name}
        </NavLink>  )}
</ul> 
    </div>
<Outlet/>
    </div>
  )
}

export default Users