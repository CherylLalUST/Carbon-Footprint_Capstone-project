package com.ust.carbon_footprint_statistics.controller;

import com.ust.carbon_footprint_statistics.model.Statistics;
import com.ust.carbon_footprint_statistics.service.StatisticsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("/carbonFootprint/statistics")
public class StatisticsController {

    @Autowired
    private StatisticsService statisticsService;

    @PostMapping("/addDetails")
    public ResponseEntity<Statistics> addStatistics(@RequestBody Statistics statistics){
        Statistics stats= statisticsService.addStatistics(statistics);
        return ResponseEntity.status(HttpStatus.CREATED).body(stats);
    }

    @GetMapping("/getById")
    public ResponseEntity<Optional<Statistics>> getStatisticsById(@PathVariable String houseId) {
        Optional<Statistics> statistics = statisticsService.getStatisticsById(houseId);
        return statistics.isPresent()
                ? ResponseEntity.status(HttpStatus.OK).body(statistics)
                : ResponseEntity.status(HttpStatus.NOT_FOUND).build();
    }
}
