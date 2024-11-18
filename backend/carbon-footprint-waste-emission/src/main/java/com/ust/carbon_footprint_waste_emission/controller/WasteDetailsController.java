package com.ust.carbon_footprint_waste_emission.controller;

import com.ust.carbon_footprint_waste_emission.model.WasteDetails;
import com.ust.carbon_footprint_waste_emission.repo.WasteDetailsRepo;
import com.ust.carbon_footprint_waste_emission.service.WasteDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("/carbonFootprint/waste")
public class WasteDetailsController {
        @Autowired
        private WasteDetailsService wasteDetailsService;

        // Endpoint to get WasteDetails by wasteId
        @GetMapping("/getWasteDetailsById/{wasteId}")
        public ResponseEntity<Optional<WasteDetails>> getWasteDetailsById(@PathVariable String wasteId) {
            Optional<WasteDetails> wasteDetails = wasteDetailsService.getWasteDetailsById(wasteId);
            if(wasteDetails.isPresent()){
            return ResponseEntity.status(HttpStatus.OK).body(wasteDetails);
            }
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();

        }

//        // Endpoint to calculate waste emission for provided WasteDetails data
//        @PostMapping("/calculate")
//        public ResponseEntity<WasteDetails> calculateWasteEmission(@RequestBody WasteDetails wasteDetails) {
//            WasteDetails calculatedDetails = wasteDetailsService.calculateFoodEmission(wasteDetails);
//            return ResponseEntity.ok(calculatedDetails);
//        }

        @PostMapping("/addDetails")
            public ResponseEntity<WasteDetails> addWasteDetails(@RequestBody WasteDetails wasteDetails) {
            WasteDetails addedDetails = wasteDetailsService.addWasteDetails(wasteDetails);
            return ResponseEntity.status(HttpStatus.CREATED).body(addedDetails);
        }

    @GetMapping("/getWasteDetailsByStatisticsId/{statisticsId}")
    public ResponseEntity<WasteDetails> getWasteDetailsByStatisticsId(@PathVariable String statisticsId){
        WasteDetails wasteDetails = wasteDetailsService.getWasteDetailsByStatisticsId(statisticsId);
        return ResponseEntity.status(HttpStatus.OK).body(wasteDetails);
    }
    }


