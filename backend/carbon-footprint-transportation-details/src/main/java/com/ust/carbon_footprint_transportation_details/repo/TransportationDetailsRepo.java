package com.ust.carbon_footprint_transportation_details.repo;

import com.ust.carbon_footprint_transportation_details.model.TransportationDetails;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface TransportationDetailsRepo extends MongoRepository<TransportationDetails,String> {
    Optional<TransportationDetails> findByTransportationDetailsId(String transportationDetailsId);

    TransportationDetails findByStatisticsId(String statisticsId);
}