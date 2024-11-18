package com.ust.carbon_footprint_house_energy.repo;

import com.ust.carbon_footprint_house_energy.model.HouseEnergyDetails;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HouseEnergyRepo extends MongoRepository<HouseEnergyDetails,String> {
    HouseEnergyDetails findByStatisticsId(String statisticsId);
}
