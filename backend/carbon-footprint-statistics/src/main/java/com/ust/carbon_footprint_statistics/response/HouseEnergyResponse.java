package com.ust.carbon_footprint_statistics.response;


public class HouseEnergyResponse {

    private String houseId;
    private double houseElectricity;
    private String houseElectricityType;
    private double houseNaturalGas;
    private String houseNaturalGasType;
    private double totalHouseEmission;
    private String statisticsId;

    public String getHouseId() {
        return houseId;
    }

    public void setHouseId(String houseId) {
        this.houseId = houseId;
    }

    public double getHouseElectricity() {
        return houseElectricity;
    }

    public void setHouseElectricity(double houseElectricity) {
        this.houseElectricity = houseElectricity;
    }

    public String getHouseElectricityType() {
        return houseElectricityType;
    }

    public void setHouseElectricityType(String houseElectricityType) {
        this.houseElectricityType = houseElectricityType;
    }

    public double getHouseNaturalGas() {
        return houseNaturalGas;
    }

    public void setHouseNaturalGas(double houseNaturalGas) {
        this.houseNaturalGas = houseNaturalGas;
    }

    public String getHouseNaturalGasType() {
        return houseNaturalGasType;
    }

    public void setHouseNaturalGasType(String houseNaturalGasType) {
        this.houseNaturalGasType = houseNaturalGasType;
    }

    public double getTotalHouseEmission() {
        return totalHouseEmission;
    }

    public void setTotalHouseEmission(double totalHouseEmission) {
        this.totalHouseEmission = totalHouseEmission;
    }

    public String getStatisticsId() {
        return statisticsId;
    }

    public void setStatisticsId(String statisticsId) {
        this.statisticsId = statisticsId;
    }

    public HouseEnergyResponse() {
    }

    public HouseEnergyResponse(String houseId, double houseElectricity, String houseElectricityType, double houseNaturalGas, String houseNaturalGasType, double totalHouseEmission, String statisticsId) {
        this.houseId = houseId;
        this.houseElectricity = houseElectricity;
        this.houseElectricityType = houseElectricityType;
        this.houseNaturalGas = houseNaturalGas;
        this.houseNaturalGasType = houseNaturalGasType;
        this.totalHouseEmission = totalHouseEmission;
        this.statisticsId = statisticsId;
    }
}
