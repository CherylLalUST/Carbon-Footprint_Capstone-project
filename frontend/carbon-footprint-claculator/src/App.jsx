import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Welcome from "./components/Welcome";
import Register from "./components/Register";
import Login from "./components/Login";
import UserDetailsForm from "./components/UserDetailsForm";
import TransportationDetails from "./components/TransportationDetails";
import WasteDetails from "./components/WasteDetails";
import HouseEnergyDetails from "./components/HouseEnergyDetails";
import Statistics from "./components/Statistics";
import ViewStatistics from "./components/ViewStatistics";
import CarbonEmissionModal from "./components/CarbonEmissionModal";
import Navbar from "./components/Navbar";
import { FormProvider } from "./FormContext"; // Import the context
import { ArrowUpCircle } from 'lucide-react';
import MonthCard from "./components/MonthCard";
import YearSelector from "./components/YearSelector";

function AppContent() {
  const location = useLocation();

  // Only render Navbar for specified routes
  const shouldDisplayNavbar = ['/transportation', '/waste', '/houseEnergy'].includes(location.pathname);

  return (
    <>
    <div>
{/* Conditionally render Navbar */}
{shouldDisplayNavbar && <Navbar />}
    </div>
      <div>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user/:username" element={<UserDetailsForm />} />
        <Route path="/transportation" element={<TransportationDetails />} />
        <Route path="/waste" element={<WasteDetails />} />
        <Route path="/houseEnergy" element={<HouseEnergyDetails />} />
        <Route path="/userHomePage" element={<Statistics />} />
        <Route path="/view-statistics" element={<ViewStatistics />} />
        <Route path="/emission" element={<CarbonEmissionModal />} />
        <Route path="/month" element={<MonthCard />} />
        <Route path= "/year" element={<YearSelector />} />
        
        
        </Routes>
      </div>
      
      
         
      {/* </Routes> */}
    </>
  );
}

function App() {
  return (
    <FormProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </FormProvider>
  );
}

export default App;
