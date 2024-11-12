package com.ust.carbon_footprint_vehicle_emission.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Vehicle {
    @Id
    private String vehicleId;

    private String transportationDetailsId; // fk
    private double vehicleDistanceTravelled;
    private String vehicleFuelType;
    private double vehicleAvgMileage;
    private boolean isPollutionCleared;
    private  boolean isMaintenanceDone;
    private double vehicleCarbonEmission;
    private double vehicleReducedCarbonEmission;
}
