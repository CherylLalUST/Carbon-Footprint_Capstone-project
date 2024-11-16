// import { BrowserRouter, Route, Routes } from "react-router-dom"
// import Welcome from "./components/Welcome"
// import Register from "./components/Register"
// import Login from "./components/Login"
// import UserDetailsForm from "./components/UserDetailsForm"
// import TransportationDetails from "./components/TransportationDetails"
// import WasteDetails from "./components/WasteDetails"
// import HouseEnergyDetails from "./components/HouseEnergyDetails"
// import Statistics from "./components/Statistics"
// import ProgressTracker from "./components/ProgressTracker"
// function App() {

//   return (
//     <>
//       <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Welcome />}></Route>
//         <Route path="/register" element={<Register />}></Route>
//         <Route path="/login" element={<Login />}></Route>
//         <Route path="/user" element={<UserDetailsForm></UserDetailsForm>}></Route>
//         <Route path="/progress" element={<ProgressTracker />}>
//           <Route path="/transportation" element={<TransportationDetails />}></Route>
//           <Route path="/waste" element={<WasteDetails />}></Route>
//           <Route path="/houseEnergy" element={<HouseEnergyDetails />}></Route>
//         </Route>
//         <Route path="/userHomePage" element={<Statistics />}></Route>
//       </Routes>
//       </BrowserRouter>
//     </>
//   )
// }

// export default App
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./components/Welcome";
import Register from "./components/Register";
import Login from "./components/Login";
import UserDetailsForm from "./components/UserDetailsForm";
import TransportationDetails from "./components/TransportationDetails";
import WasteDetails from "./components/WasteDetails";
import HouseEnergyDetails from "./components/HouseEnergyDetails";
import Statistics from "./components/Statistics";
import ViewStatistics from "./components/ViewStatistics"
import CarbonEmissionModal from "./components/CarbonEmissionModal";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main routes */}
        <Route path="/" element={<Welcome />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user" element={<UserDetailsForm />} />
        <Route path="/userHomePage" element={<Statistics />} />
        <Route path="/transportation" element={<TransportationDetails />} />
        <Route path="/waste" element={<WasteDetails />} />
        <Route path="/houseEnergy" element={<HouseEnergyDetails />} />
        <Route path="/view" element={<ViewStatistics />} />
        <Route path="/emission" element={<CarbonEmissionModal />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
