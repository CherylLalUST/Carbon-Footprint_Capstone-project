package com.ust.carbon_footprint_statistics.service;

import com.ust.carbon_footprint_statistics.feign.HouseEnergyFeign;
import com.ust.carbon_footprint_statistics.feign.TransportationFeign;
import com.ust.carbon_footprint_statistics.feign.WasteFeign;
import com.ust.carbon_footprint_statistics.model.Statistics;
import com.ust.carbon_footprint_statistics.repo.StatisticsRepo;
import com.ust.carbon_footprint_statistics.response.FullResponse;
import com.ust.carbon_footprint_statistics.response.HouseEnergyResponse;
import com.ust.carbon_footprint_statistics.response.TransportationResponse;
import com.ust.carbon_footprint_statistics.response.WasteResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
public class StatisticsService {

    @Autowired
    private StatisticsRepo statisticsRepo;

    @Autowired
    private HouseEnergyFeign houseEnergyFeign;

    @Autowired
    private WasteFeign wasteFeign;

    @Autowired
    private TransportationFeign transportationFeign;

    // Save a new Statistics entry
    public Statistics addStatistics(Statistics statistics) {
        statistics.setStatisticsDate(LocalDate.now());
        return statisticsRepo.save(statistics);
    }

    // Retrieve Statistics by ID
    public Optional<Statistics> getStatisticsById(String houseId) {
        return statisticsRepo.findById(houseId);
    }

    public FullResponse getFullDetailsByStatisticsId(String statisticsId){

        Statistics toUpdateAndSave = new Statistics();

        Statistics statistics = statisticsRepo.findByStatisticsId(statisticsId).orElse(null);
        System.out.println("statistics : " + statistics);
        WasteResponse wasteResponse = wasteFeign.getWasteDetailsByStatisticsId(statisticsId);
        System.out.println("wasteResponse : " + wasteResponse);
        HouseEnergyResponse houseEnergyResponse = houseEnergyFeign.getHouseEnergyDetailsByStatisticsId(statisticsId);
        System.out.println("houseEnergyResponse : " + houseEnergyResponse);
        TransportationResponse transportationResponse = transportationFeign.getTransportationByStatisticsId(statisticsId);
        System.out.println("transportationResponse : " + transportationResponse);

        if(statistics != null){
            FullResponse fullResponse = new FullResponse();

            fullResponse.setStatisticsId(statistics.getStatisticsId());
            toUpdateAndSave.setStatisticsId(fullResponse.getStatisticsId());

            fullResponse.setStatisticsDate(statistics.getStatisticsDate());
            toUpdateAndSave.setStatisticsDate(fullResponse.getStatisticsDate());
            
            fullResponse.setUserDetailsId(statistics.getUserDetailsId());
            toUpdateAndSave.setUserDetailsId(fullResponse.getUserDetailsId());

            fullResponse.setTotalTransportationEmission(transportationResponse.getTotalTransportationEmission());
            fullResponse.setTotalWasteEmission(wasteResponse.getTotalWasteEmission());
            fullResponse.setTotalHouseEnergyEmission(houseEnergyResponse.getTotalHouseEmission());
            toUpdateAndSave.setTotalTransportationEmission(fullResponse.getTotalTransportationEmission());
            toUpdateAndSave.setTotalWasteEmission(fullResponse.getTotalWasteEmission());
            toUpdateAndSave.setTotalHouseEnergyEmission(fullResponse.getTotalHouseEnergyEmission());

            fullResponse.setTotalEmission(wasteResponse.getTotalWasteEmission() + houseEnergyResponse.getTotalHouseEmission() + transportationResponse.getTotalTransportationEmission());
            toUpdateAndSave.setTotalEmission(fullResponse.getTotalEmission());

            fullResponse.setWasteResponse(wasteResponse);
            fullResponse.setHouseEnergyResponse(houseEnergyResponse);
            fullResponse.setTransportationResponse(transportationResponse);
            updateStatistics(toUpdateAndSave.getStatisticsId(),toUpdateAndSave);
            return fullResponse;
        }
        return null;
    }

    public void updateStatistics(String id, Statistics statistics){

        if(statisticsRepo.existsById(id)){
            statistics.setStatisticsId(id);
            statisticsRepo.save(statistics);
        }
    }

    public List<Statistics> getStatisticsByUserDetailsId(String userDetailsId){
        return statisticsRepo.findByUserDetailsId(userDetailsId);
    }
}

