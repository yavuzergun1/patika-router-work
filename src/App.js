import { Link } from "react-router-dom";
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
        <Link to="/"><h1>Bookkeeper</h1></Link> 
        <Link to="/Home">Home</Link> |{" "}
        <Link to="/About">About</Link> |{" "}
        <Link to="/Users">Users</Link>
      </nav>
      <Outlet/>
    </div>
  );
}