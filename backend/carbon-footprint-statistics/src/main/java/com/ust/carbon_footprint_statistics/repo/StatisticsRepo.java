package com.ust.carbon_footprint_statistics.repo;

import com.ust.carbon_footprint_statistics.model.Statistics;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface StatisticsRepo extends MongoRepository<Statistics,String> {
    Optional<Statistics> findByStatisticsId(String statisticsId);
}
