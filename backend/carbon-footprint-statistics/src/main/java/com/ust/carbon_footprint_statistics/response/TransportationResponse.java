package com.ust.carbon_footprint_statistics.response;

public class TransportationResponse {

    private String transportationDetailsId;
    private int numberOfVehicles;
    private double totalTransportationEmission;
    private double totalReducedEmission;
    private String statisticsId;

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

    public String getStatisticsId() {
        return statisticsId;
    }

    public void setStatisticsId(String statisticsId) {
        this.statisticsId = statisticsId;
    }

    public TransportationResponse() {
    }

    public TransportationResponse(String transportationDetailsId, int numberOfVehicles, double totalTransportationEmission, double totalReducedEmission, String statisticsId) {
        this.transportationDetailsId = transportationDetailsId;
        this.numberOfVehicles = numberOfVehicles;
        this.totalTransportationEmission = totalTransportationEmission;
        this.totalReducedEmission = totalReducedEmission;
        this.statisticsId = statisticsId;
    }
}
