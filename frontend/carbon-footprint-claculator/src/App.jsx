import { BrowserRouter, Route, Routes } from "react-router-dom"
import Welcome from "./components/Welcome"
import Register from "./components/Register"
import Login from "./components/Login"

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
