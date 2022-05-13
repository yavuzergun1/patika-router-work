import { Link, NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Home from "./Routes/Home";
import About from "./Routes/About";
import Users from "./Routes/Users";

export default function App() {
  return (
    <div>
      

      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <NavLink style={({isActive}) =>{
          return {display: "block",margin: "1rem 0",color: isActive ? "red" : "" };}}
          to="/"><h1>Bookkeeper</h1></NavLink> 
        <NavLink style={({isActive}) =>{
          return {display: "inline",margin: "1rem 0",color: isActive ? "red" : "" };}} to="/Home">Home</NavLink> |{" "}
        <NavLink style={({isActive}) =>{
          return {display: "inline",margin: "1rem 0",color: isActive ? "red" : "" };}} to="/About">About</NavLink> |{" "}
        <NavLink style={({isActive}) =>{
          return {display: "inline",margin: "1rem 0",color: isActive ? "red" : "" };}} to="/Users">Users</NavLink>
      </nav>
      <Outlet/>
    </div>
  );
} 