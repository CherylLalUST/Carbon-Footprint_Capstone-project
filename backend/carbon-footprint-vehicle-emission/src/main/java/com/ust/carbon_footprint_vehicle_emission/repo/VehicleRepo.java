package com.ust.carbon_footprint_vehicle_emission.repo;

import com.ust.carbon_footprint_vehicle_emission.model.Vehicle;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface VehicleRepo extends MongoRepository<Vehicle,String> {
    List<Vehicle> findByTransportationDetailsId(String transportationDetailsId);
}
