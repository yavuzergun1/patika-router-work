import React from 'react';
import {useParams, Link} from "react-router-dom";
import {useEffect, useState} from "react"
import axios from 'axios';

function User() {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  let {id} = useParams()
  // console.log(id);

  

useEffect(()=>{
  axios(`https://jsonplaceholder.typicode.com/users/${id}`).then((res)=>
  setUser(res.data))
  .catch((e)=>console.log(e))
  .finally(()=> setIsLoading(false))
}, [id]);

    
  return (
    <div>
      <h2
      style={{padding:'1rem 2rem'}}
      >User Details</h2>
      <h4 style={{padding:'0 2rem'}}> {user.id}. user </h4>
        <ul>
        {isLoading && <div>Loading...</div>}
           {!isLoading && <li> Name: {JSON.stringify(user.username)}</li>}
           {!isLoading && <li> E-Mail: {JSON.stringify(user.email)}</li>}
           {!isLoading && <li> Street: {JSON.stringify(user.address.street)}</li>}
           {!isLoading && <li> Company: {JSON.stringify(user.company.name)}</li>}
            {/* Loading halindeyken boş obje göstermeyi engeller. (Loading yoksa objecti göster, varsa gösterme) */}
        </ul>
        <br />
        
        <Link
        style={{padding:'0 1rem'}}
        to= {`/users/${parseInt(id) + 1}`}>Next User</Link>
       
        {/* id string bir ifade olduğu için parseInt ile number'a çeviriyoruz. */}
         </div>
  );
}

export default User;