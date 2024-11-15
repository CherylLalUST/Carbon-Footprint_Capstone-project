package com.ust.carbon_footprint_house_energy.controller;

import com.ust.carbon_footprint_house_energy.model.HouseEnergyDetails;
import com.ust.carbon_footprint_house_energy.service.HouseEnergyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;
@RestController
@RequestMapping("/carbonFootprint/houseEnergy")
public class HouseEnergyController {

    @Autowired
    private HouseEnergyService houseEnergyService;
    @PostMapping("/addDetails")
    public ResponseEntity<HouseEnergyDetails> addHouseEnergyDetails(@RequestBody HouseEnergyDetails houseEnergyDetails) {
        HouseEnergyDetails addedDetails = houseEnergyService.addHouseEnergyDetails(houseEnergyDetails);
        return ResponseEntity.status(HttpStatus.CREATED).body(addedDetails);
    }

    // Endpoint to get house energy details by ID
    @GetMapping("/getDetailsById/{houseId}")
    public ResponseEntity<Optional<HouseEnergyDetails>> getHouseEnergyDetailsById(@PathVariable String houseId) {
        Optional<HouseEnergyDetails> houseEnergyDetails = houseEnergyService.getHouseEnergyDetailsById(houseId);
        return houseEnergyDetails.isPresent()
                ? ResponseEntity.status(HttpStatus.OK).body(houseEnergyDetails)
                : ResponseEntity.status(HttpStatus.NOT_FOUND).build();
    }

    @GetMapping("/emission")
    public HouseEnergyDetails getEmission(@PathVariable String houseId) {
        return houseEnergyService.getTotalHouseEmission(houseId);
    }
}
