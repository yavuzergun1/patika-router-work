import React from 'react'
import { Link } from 'react-router-dom'

function Users() {
  return (
    <div>
        <ul>
            <li>
            <Link to="/User/1">User 1</Link>
            </li>
            <li>
            <Link to="/User/2">User 2</Link>
            </li>
            <li>
            <Link to="/User/3">User 3</Link>
            </li>
        </ul>
    </div>
  )
}

export default Users