import {Routes, Route} from "react-router"
import Dashboard from "./Pages/Dashboard"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import TaskCard from "./components/TaskCard"
import TaskForm from "./components/TaskForm"

function App() {

  return (
    <>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Dashboard/>}/>
      <Route path="/create" element={<TaskForm/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
