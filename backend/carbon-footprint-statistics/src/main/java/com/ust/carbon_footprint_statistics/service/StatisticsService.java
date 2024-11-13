package com.ust.carbon_footprint_statistics.service;

import com.ust.carbon_footprint_statistics.model.Statistics;
import com.ust.carbon_footprint_statistics.repo.StatisticsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class StatisticsService {

    @Autowired
    private StatisticsRepo statisticsRepo;

    public Statistics addStatistics(Statistics statistics){
        return statisticsRepo.save(statistics);
    }

    public Optional<Statistics> getStatisticsById(String houseId) {
        return statisticsRepo.findById(houseId);
    }
}
