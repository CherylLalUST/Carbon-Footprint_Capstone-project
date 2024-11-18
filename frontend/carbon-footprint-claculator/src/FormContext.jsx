import React, { createContext, useState } from "react";

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [transportationData, setTransportationData] = useState({
    numberOfVehicles: 0,
    vehicles: [],
  });

  const [wasteData, setWasteData] = useState({
    wasteFoodAmount: 0,
    foodCompost: false,
    wastePlasticAmount: 0,
    plasticRecycle: false,
    wastePaperAmount: 0,
    paperRecycle: false,
    wasteGlassAmount: 0,
    glassRecycle: false,
    wasteMetalAmount: 0,
    metalRecycle: false,
    ewasteAmount: 0,
    ewasteRecycle: false,
  });

  const [houseEnergyData, setHouseEnergyData] = useState({
    electricityUsage: 0,
    gasUsage: 0,
    electricityType: "",
    naturalGasType: "",
  });

  return (
    <FormContext.Provider
      value={{
        transportationData,
        setTransportationData,
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
