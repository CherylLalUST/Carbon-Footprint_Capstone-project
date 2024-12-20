package com.ust.carbon_footprint_transportation_details.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class TransportationDetails {
    @Id
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

    public TransportationDetails() {
    }

    public TransportationDetails(String transportationDetailsId, int numberOfVehicles, double totalTransportationEmission, double totalReducedEmission, String statisticsId) {
        this.transportationDetailsId = transportationDetailsId;
        this.numberOfVehicles = numberOfVehicles;
        this.totalTransportationEmission = totalTransportationEmission;
        this.totalReducedEmission = totalReducedEmission;
        this.statisticsId = statisticsId;
    }

	@Override
	public String toString() {
		return "TransportationDetails [transportationDetailsId=" + transportationDetailsId + ", numberOfVehicles="
				+ numberOfVehicles + ", totalTransportationEmission=" + totalTransportationEmission
				+ ", totalReducedEmission=" + totalReducedEmission + ", statisticsId=" + statisticsId + "]";
	}
    
    
}
