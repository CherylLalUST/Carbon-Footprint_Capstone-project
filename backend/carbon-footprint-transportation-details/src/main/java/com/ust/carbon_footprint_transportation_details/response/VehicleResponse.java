package com.ust.carbon_footprint_transportation_details.response;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class VehicleResponse {

    private String vehicleId;

    private String transportationDetailsId; // fk
    private double vehicleDistanceTravelled;
    private String vehicleFuelType;
    private double vehicleAvgMileage;
    private boolean pollutionCleared;
    private  boolean maintenanceDone;
    private double vehicleCarbonEmission;
    private double vehicleReducedCarbonEmission;
}
