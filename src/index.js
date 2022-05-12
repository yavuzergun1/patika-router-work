import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./Routes/Home";
import About from "./Routes/About";
import Users from "./Routes/Users";
import App from "./App";
import User from "./Routes/User";
// import Deneme from "./Routes/Deneme";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} >
      <Route path="home" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="users" element={<Users />} />
      {/* <Route path="users" element={<Deneme />} /> */}
      </Route>
      <Route path="user/:id" element={<User />} />
      <Route path="*" 
      element={
      <main style={{ padding: "10rem" }}>
          <p>There's nothing here!</p>
        </main>
      }
      />

    </Routes>
  </BrowserRouter>,
  rootElement
);