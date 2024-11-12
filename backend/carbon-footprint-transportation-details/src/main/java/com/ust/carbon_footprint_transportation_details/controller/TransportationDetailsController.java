package com.ust.carbon_footprint_transportation_details.controller;

import com.ust.carbon_footprint_transportation_details.model.TransportationDetails;
import com.ust.carbon_footprint_transportation_details.response.FullResponse;
import com.ust.carbon_footprint_transportation_details.service.TransportationDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/carbonFootprint/transportationDetails")
public class TransportationDetailsController {

    @Autowired
    private TransportationDetailsService transportationDetailsService;

    @GetMapping("/getAllTransportationDetails")
    public ResponseEntity<List<TransportationDetails>> getAllTransportationDetails(){
        List<TransportationDetails> transportationDetails = transportationDetailsService.getAllTransportationDetails();
        return ResponseEntity.status(HttpStatus.OK).body(transportationDetails);
    }

    @GetMapping("/getTransportationDetailsById/{id}")
    public ResponseEntity<Optional<TransportationDetails>> getTransportationDetailsById(@PathVariable String id){
        Optional<TransportationDetails> transportationDetails = transportationDetailsService.getTransportationDetailsById(id);
        if(transportationDetails.isPresent()){
            return ResponseEntity.status(HttpStatus.OK).body(transportationDetails);
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
    }

    @PostMapping("/addTransportationDetails")
    public ResponseEntity<TransportationDetails> addTransportationDetails(@RequestBody TransportationDetails transportationDetails){
        transportationDetails = transportationDetailsService.addTransportationDetails(transportationDetails);
        return ResponseEntity.status(HttpStatus.CREATED).body(transportationDetails);
    }

    @PutMapping("/updateTransportationDetails/{id}")
    public ResponseEntity<?> updateTransportationDetails(@PathVariable String id,@RequestBody TransportationDetails transportationDetails){
        TransportationDetails returnedTransportationDetails = transportationDetailsService.updateTransportationDetails(id,transportationDetails);
        if(returnedTransportationDetails != null){
            return ResponseEntity.status(HttpStatus.OK).body(returnedTransportationDetails);
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("No records found for given ID.");
    }

    @DeleteMapping("/deleteTransportationDetails")
    public ResponseEntity<?> deleteTransportationDetails(@PathVariable String id){
        TransportationDetails returnedTransportationDetails = transportationDetailsService.deleteTransportationDetails(id);
        if(returnedTransportationDetails != null){
            return ResponseEntity.status(HttpStatus.OK).body(returnedTransportationDetails);
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("No records found for given ID.");
    }

    @GetMapping("/getVehiclesByTransportationId/{transportationDetailsId}")
    public ResponseEntity<FullResponse> getVehiclesByTransportationId(@PathVariable String transportationDetailsId) {
        FullResponse fullResponses = transportationDetailsService.getVehiclesByTransportationId(transportationDetailsId);
        if (fullResponses != null) {
            return ResponseEntity.status(HttpStatus.OK).body(fullResponses);
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
    }
}
