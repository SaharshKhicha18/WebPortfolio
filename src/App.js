import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import SinglePost from "./components/SinglePost";
import Post from "./components/Post";
import Project from "./components/Project";
import NavBar from "./components/NavBar";
import Resume from "./components/Resume"

function App() {
  return (
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route element={<About />} path='/about' />
        <Route element={<SinglePost />} path='/post/:slug' />
        <Route element={<Post />} path='/post' />
        <Route element={<Project />} path='/project' />
        <Route element={<Resume />} path='/resume' />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
