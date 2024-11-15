package com.ust.carbon_footprint_statistics.service;

import com.ust.carbon_footprint_statistics.feign.HouseEnergyFeign;
import com.ust.carbon_footprint_statistics.model.Statistics;
import com.ust.carbon_footprint_statistics.repo.StatisticsRepo;
import com.ust.carbon_footprint_statistics.response.FullResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class StatisticsService {

    @Autowired
    private StatisticsRepo statisticsRepo;

    @Autowired
    private HouseEnergyFeign houseEnergyFeign;

    // Save a new Statistics entry
    public Statistics addStatistics(Statistics statistics) {
        return statisticsRepo.save(statistics);
    }

    // Retrieve Statistics by ID
    public Optional<Statistics> getStatisticsById(String houseId) {
        return statisticsRepo.findById(houseId);
    }

    public FullResponse getStatisticsByHouseId(String houseId) {
        FullResponse fullResponse = new FullResponse();
        Optional<Statistics> statistics = statisticsRepo.findById(houseId);
        if (statistics.isPresent()) {
            fullResponse.setStatistics(statistics.get());
            fullResponse.setHouseEnergy(houseEnergyFeign.getHouseEnergyByHouseId(houseId));
            return fullResponse;
        } else {
            return null;
        }
    }
}

