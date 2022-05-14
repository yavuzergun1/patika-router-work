import React from 'react'
import { NavLink, Outlet, useSearchParams } from 'react-router-dom'
import { useState, useEffect} from 'react'

import axios from 'axios';


function Users() {
    const[users, setUsers]= useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchParams, setSearchParams]= useSearchParams();
    
    for (const entry of searchParams.entries()) {
      console.log(entry);
    }

    useEffect(() => {
        axios('https://jsonplaceholder.typicode.com/users')
        .then((res)=> (setUsers(res.data)))
        // .catch((e)=>console.log(e))
        .finally(()=> setIsLoading(false))
    
      
    }, [])
    

  return (
    <div
    style={{ display: "flex" }}>
     <nav
     style={{
          borderRight: "solid 1px",
          padding: "1rem",
        }}
     > 
        <h1>Users</h1>
<ul> 
        {isLoading && <div>Loading...</div>}

        <input
          value={searchParams.get("filter") || ""}
          onChange={(event) => {
            let filter = event.target.value;
            if (filter) {
              setSearchParams({ filter });
            } else {
              setSearchParams({});
            }
          }}
        />
        {users
          .filter((user) => {
            let filter = searchParams.get("filter");
            if (!filter) return true;
            let name = user.name.toLowerCase();
            return name.startsWith(filter.toLowerCase());
          })
          .map((user)=> 
        <NavLink 
        style={({isActive}) =>{
          return {
            display: "block",
            margin: "1rem 0",
            color: isActive ? "red" : "" };                    
        }}

        key={user.id} 
        to={`/users/${user.id}`} >{user.name}
        </NavLink>  )}
</ul> 
    </nav>
<Outlet/>
    </div>
  )
}

export default Users