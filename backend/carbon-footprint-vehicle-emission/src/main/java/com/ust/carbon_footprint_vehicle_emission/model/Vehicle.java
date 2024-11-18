package com.ust.carbon_footprint_vehicle_emission.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Vehicle {
    @Id
    private String vehicleId;

    private String transportationDetailsId; // fk
    private double vehicleDistanceTravelled;
    private String vehicleFuelType;
    private double vehicleAvgMileage;
    private boolean pollutionCleared;
    private  boolean maintenanceDone;
    private double vehicleCarbonEmission;
    private double vehicleReducedCarbonEmission;

    public String getVehicleId() {
        return vehicleId;
    }

    public void setVehicleId(String vehicleId) {
        this.vehicleId = vehicleId;
    }

    public String getTransportationDetailsId() {
        return transportationDetailsId;
    }

    public void setTransportationDetailsId(String transportationDetailsId) {
        this.transportationDetailsId = transportationDetailsId;
    }

    public double getVehicleDistanceTravelled() {
        return vehicleDistanceTravelled;
    }

    public void setVehicleDistanceTravelled(double vehicleDistanceTravelled) {
        this.vehicleDistanceTravelled = vehicleDistanceTravelled;
    }

    public String getVehicleFuelType() {
        return vehicleFuelType;
    }

    public void setVehicleFuelType(String vehicleFuelType) {
        this.vehicleFuelType = vehicleFuelType;
    }

    public double getVehicleAvgMileage() {
        return vehicleAvgMileage;
    }

    public void setVehicleAvgMileage(double vehicleAvgMileage) {
        this.vehicleAvgMileage = vehicleAvgMileage;
    }

    public boolean isPollutionCleared() {
        return pollutionCleared;
    }

    public void setPollutionCleared(boolean pollutionCleared) {
        this.pollutionCleared = pollutionCleared;
    }

    public boolean isMaintenanceDone() {
        return maintenanceDone;
    }

    public void setMaintenanceDone(boolean maintenanceDone) {
        this.maintenanceDone = maintenanceDone;
    }

    public double getVehicleCarbonEmission() {
        return vehicleCarbonEmission;
    }

    public void setVehicleCarbonEmission(double vehicleCarbonEmission) {
        this.vehicleCarbonEmission = vehicleCarbonEmission;
    }

    public double getVehicleReducedCarbonEmission() {
        return vehicleReducedCarbonEmission;
    }

    public void setVehicleReducedCarbonEmission(double vehicleReducedCarbonEmission) {
        this.vehicleReducedCarbonEmission = vehicleReducedCarbonEmission;
    }

    public Vehicle() {
    }

    public Vehicle(String vehicleId, String transportationDetailsId, double vehicleDistanceTravelled, String vehicleFuelType, double vehicleAvgMileage, boolean pollutionCleared, boolean maintenanceDone, double vehicleCarbonEmission, double vehicleReducedCarbonEmission) {
        this.vehicleId = vehicleId;
        this.transportationDetailsId = transportationDetailsId;
        this.vehicleDistanceTravelled = vehicleDistanceTravelled;
        this.vehicleFuelType = vehicleFuelType;
        this.vehicleAvgMileage = vehicleAvgMileage;
        this.pollutionCleared = pollutionCleared;
        this.maintenanceDone = maintenanceDone;
        this.vehicleCarbonEmission = vehicleCarbonEmission;
        this.vehicleReducedCarbonEmission = vehicleReducedCarbonEmission;
    }
}
