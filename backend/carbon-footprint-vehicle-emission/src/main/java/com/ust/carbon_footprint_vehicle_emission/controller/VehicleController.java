package com.ust.carbon_footprint_vehicle_emission.controller;

import com.ust.carbon_footprint_vehicle_emission.model.Vehicle;
import com.ust.carbon_footprint_vehicle_emission.service.VehicleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("/carbonFootprint/vehicles")
public class VehicleController {

    @Autowired
    private VehicleService vehicleService;

    @GetMapping("/getAllVehicles")
    public ResponseEntity<List<Vehicle>> getAllVehicles(){
        List<Vehicle> vehicles = vehicleService.getAllVehicles();
        return ResponseEntity.status(HttpStatus.OK).body(vehicles);
    }

    @GetMapping("/getVehicleById/{id}")
    public ResponseEntity<Optional<Vehicle>> getVehicleById(@PathVariable String id){
        Optional<Vehicle> vehicle = vehicleService.getVehicleById(id);
        if(vehicle.isPresent()){
            return ResponseEntity.status(HttpStatus.OK).body(vehicle);
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
    }

    @PostMapping("/addVehicle")
    public ResponseEntity<Vehicle> addVehicle(@RequestBody Vehicle vehicle){
        vehicle = vehicleService.addVehicle(vehicle);
        return ResponseEntity.status(HttpStatus.CREATED).body(vehicle);
    }

    @PostMapping("/addVehicles")
    public ResponseEntity<List<Vehicle>> addVehicles(@RequestBody List<Vehicle> vehicles) {
        System.out.println("vehicles : " + vehicles);
        List<Vehicle> savedVehicles = vehicleService.addVehicles(vehicles);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedVehicles);
    }

    @GetMapping("/getVehiclesByTransportationId/{transportationDetailsId}")
    public ResponseEntity<List<Vehicle>> getVehiclesByTransportationId(@PathVariable String transportationDetailsId){
        List<Vehicle> vehicles = vehicleService.getVehiclesByTransportationId(transportationDetailsId);
        return ResponseEntity.status(HttpStatus.OK).body(vehicles);
    }

//    implement if required
//    @PutMapping("/updateVehicle")

}
