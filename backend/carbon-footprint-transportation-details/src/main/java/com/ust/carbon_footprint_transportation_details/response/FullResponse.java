package com.ust.carbon_footprint_transportation_details.response;


import java.util.List;

public class FullResponse {

    private String transportationDetailsId;
    private int numberOfVehicles;
    private double totalTransportationEmission;
    private double totalReducedEmission;
    private String statisticsId;
    private List<VehicleResponse> vehicles;

    public String getTransportationDetailsId() {
        return transportationDetailsId;
    }

    public void setTransportationDetailsId(String transportationDetailsId) {
        this.transportationDetailsId = transportationDetailsId;
    }

    public int getNumberOfVehicles() {
        return numberOfVehicles;
    }

    public void setNumberOfVehicles(int numberOfVehicles) {
        this.numberOfVehicles = numberOfVehicles;
    }

    public double getTotalTransportationEmission() {
        return totalTransportationEmission;
    }

    public void setTotalTransportationEmission(double totalTransportationEmission) {
        this.totalTransportationEmission = totalTransportationEmission;
    }

    public double getTotalReducedEmission() {
        return totalReducedEmission;
    }

    public void setTotalReducedEmission(double totalReducedEmission) {
        this.totalReducedEmission = totalReducedEmission;
    }

    public List<VehicleResponse> getVehicles() {
        return vehicles;
    }

    public void setVehicles(List<VehicleResponse> vehicles) {
        this.vehicles = vehicles;
    }

    public String getStatisticsId() {
        return statisticsId;
    }

    public void setStatisticsId(String statisticsId) {
        this.statisticsId = statisticsId;
    }

    public FullResponse() {
    }

    public FullResponse(String transportationDetailsId, int numberOfVehicles, double totalTransportationEmission, double totalReducedEmission, String statisticsId, List<VehicleResponse> vehicles) {
        this.transportationDetailsId = transportationDetailsId;
        this.numberOfVehicles = numberOfVehicles;
        this.totalTransportationEmission = totalTransportationEmission;
        this.totalReducedEmission = totalReducedEmission;
        this.statisticsId = statisticsId;
        this.vehicles = vehicles;
    }
}
