import React, { createContext, useState } from "react";

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [transportationData, setTransportationData] = useState({
    statisticsId: sessionStorage.getItem("statisticsId"),
    numberOfVehicles: '',
    vehicles: [],
  });

  const [wasteData, setWasteData] = useState({
    statisticsId: sessionStorage.getItem("statisticsId"),
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
    statisticsId: sessionStorage.getItem("statisticsId"),
    electricityUsage: '',
    gasUsage: '',
    electricityType: '',
    naturalGasType: '',
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
