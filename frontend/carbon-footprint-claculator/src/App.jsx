import { BrowserRouter, Route, Routes } from "react-router-dom"
import Welcome from "./components/Welcome"
import Register from "./components/Register"
import Login from "./components/Login"
import UserDetailsForm from "./components/UserDetailsForm"
import TransportationDetails from "./components/TransportationDetails"
import WasteDetails from "./components/WasteDetails"
import HouseEnergyDetails from "./components/HouseEnergyDetails"

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/user" element={<UserDetailsForm></UserDetailsForm>}></Route>
        <Route path="/transportation" element={<TransportationDetails />}></Route>
        <Route path="/waste" element={<WasteDetails />}></Route>
        <Route path="/houseEnergy" element={<HouseEnergyDetails />}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
