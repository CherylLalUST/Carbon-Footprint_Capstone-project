package com.ust.carbon_footprint_waste_emission.repo;

import com.ust.carbon_footprint_waste_emission.model.WasteDetails;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WasteDetailsRepo extends MongoRepository<WasteDetails,String> {
}
