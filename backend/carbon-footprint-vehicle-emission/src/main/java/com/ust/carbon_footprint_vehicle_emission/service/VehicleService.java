package com.ust.carbon_footprint_vehicle_emission.service;

import com.ust.carbon_footprint_vehicle_emission.model.Vehicle;
import com.ust.carbon_footprint_vehicle_emission.repo.VehicleRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class VehicleService {

    private static final double PETROL_EMISSION = 2.31;
    private static final double DIESEL_EMISSION = 2.68;
    private static final double EV_EMISSION = 0.15;
    private static final double CNG_EMISSION = 2.75;

    private static final double POLLUTION_CLEARED = 0.92;
    private static final double MAINTENANCE_DONE = 0.83;

    @Autowired
    private VehicleRepo vehicleRepo;

    public List<Vehicle> getAllVehicles(){
        return vehicleRepo.findAll();
    }

    public Optional<Vehicle> getVehicleById(String id){
        return vehicleRepo.findById(id);
    }

    public Vehicle addVehicle(Vehicle vehicle){

        calculateCarbonEmission(vehicle); // Calculate emissions before saving
        vehicleRepo.save(vehicle);        // Now save the vehicle with the calculated emissions
        return vehicle;
    }

    public List<Vehicle> addVehicles(List<Vehicle> vehicles) {
        vehicles.forEach(this::calculateCarbonEmission); // Calculate emissions for each vehicle
        return vehicleRepo.saveAll(vehicles);            // Save the list of vehicles in one operation
    }


    public List<Vehicle> getVehiclesByTransportationId(String transportationDetailsId){
        return vehicleRepo.findByTransportationDetailsId(transportationDetailsId);
    }

//    public Vehicle updateVehicle(String id, Vehicle vehicle){
//
//        if(vehicleRepo.existsById(id)){
//            vehicle.setVehicleId(id);
//            vehicleRepo.save(vehicle);
//            return calculateCarbonEmission(vehicle);
//        }
//        else{
//            return null;
//        }
//    }

    private void calculateCarbonEmission(Vehicle vehicle){
        double fuelQty = ((vehicle.getVehicleDistanceTravelled()) / (vehicle.getVehicleAvgMileage()));
        switch (vehicle.getVehicleFuelType()) {
            case "petrol":
                vehicle.setVehicleCarbonEmission(fuelQty * PETROL_EMISSION);
                vehicle.setVehicleReducedCarbonEmission(vehicle.getVehicleCarbonEmission());
                break;
            case "diesel":
                vehicle.setVehicleCarbonEmission(fuelQty * DIESEL_EMISSION);
                vehicle.setVehicleReducedCarbonEmission(vehicle.getVehicleCarbonEmission());
                break;
            case "cng":
                vehicle.setVehicleCarbonEmission(fuelQty * CNG_EMISSION);
                vehicle.setVehicleReducedCarbonEmission(vehicle.getVehicleCarbonEmission());
                break;
            case "electric":
                vehicle.setVehicleCarbonEmission(fuelQty * EV_EMISSION);
                vehicle.setVehicleReducedCarbonEmission(vehicle.getVehicleCarbonEmission());
                break;
        }

        if(vehicle.isPollutionCleared()){
            vehicle.setVehicleCarbonEmission(vehicle.getVehicleCarbonEmission() * POLLUTION_CLEARED);
            vehicle.setVehicleReducedCarbonEmission(vehicle.getVehicleReducedCarbonEmission() * POLLUTION_CLEARED);
        }
        else{
            vehicle.setVehicleReducedCarbonEmission(vehicle.getVehicleReducedCarbonEmission() * POLLUTION_CLEARED);
        }

        if(vehicle.isMaintenanceDone()){
            vehicle.setVehicleCarbonEmission(vehicle.getVehicleCarbonEmission() * MAINTENANCE_DONE);
            vehicle.setVehicleReducedCarbonEmission(vehicle.getVehicleReducedCarbonEmission() * MAINTENANCE_DONE);
        }
        else {
            vehicle.setVehicleReducedCarbonEmission(vehicle.getVehicleReducedCarbonEmission() * MAINTENANCE_DONE);
        }
    }

}
