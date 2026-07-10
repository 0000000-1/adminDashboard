import {Routes, Route} from "react-router"
import Dashboard from "./Pages/Dashboard"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"

function App() {

  return (
    <>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Dashboard/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
