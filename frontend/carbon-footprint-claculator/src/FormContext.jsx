import React, { createContext, useState } from "react";

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [transportationData, setTransportationData] = useState({
    statisticsId: '',
    numberOfVehicles: '',
    vehicles: [],
  });

  const [formErrors, setFormErrors] = useState([]);

  const [wasteData, setWasteData] = useState({
    statisticsId: '',
    wasteFoodAmount: '',
    foodCompost: false,
    wastePlasticAmount: '',
    plasticRecycle: false,
    wastePaperAmount: '',
    paperRecycle: false,
    wasteGlassAmount: '',
    glassRecycle: false,
    wasteMetalAmount: '',
    metalRecycle: false,
    ewasteAmount: '',
    ewasteRecycle: false,
  });

  const [houseEnergyData, setHouseEnergyData] = useState({
    statisticsId: '',
    houseElectricity: '',
    houseNaturalGas: '',
    houseElectricityType: '',
    houseNaturalGasType: '',
  });

  return (
    <FormContext.Provider
      value={{
        transportationData,
        setTransportationData,
        formErrors,
        setFormErrors,
        wasteData,
        setWasteData,
        houseEnergyData,
        setHouseEnergyData,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
