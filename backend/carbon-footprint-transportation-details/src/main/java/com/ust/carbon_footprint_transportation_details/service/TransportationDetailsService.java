package com.ust.carbon_footprint_transportation_details.service;

import com.ust.carbon_footprint_transportation_details.feign.VehicleFeign;
import com.ust.carbon_footprint_transportation_details.model.TransportationDetails;
import com.ust.carbon_footprint_transportation_details.repo.TransportationDetailsRepo;
import com.ust.carbon_footprint_transportation_details.response.FullResponse;
import com.ust.carbon_footprint_transportation_details.response.VehicleResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TransportationDetailsService {

    @Autowired
    private TransportationDetailsRepo transportationDetailsRepo;

    @Autowired
    private VehicleFeign vehicleFeign;

    public FullResponse getVehiclesByTransportationId(String transportationDetailsId){

        TransportationDetails toUpdateAndSave = new TransportationDetails();

        TransportationDetails transportationDetails = transportationDetailsRepo.findByTransportationDetailsId(transportationDetailsId).orElse(null);
        List<VehicleResponse> vehicles = vehicleFeign.getVehiclesByTransportationId(transportationDetailsId);
        if(transportationDetails != null){

            FullResponse fullResponse = new FullResponse();

            fullResponse.setTransportationDetailsId(transportationDetails.getTransportationDetailsId());
            toUpdateAndSave.setTransportationDetailsId(fullResponse.getTransportationDetailsId());

            fullResponse.setStatisticsId(transportationDetails.getStatisticsId());
            toUpdateAndSave.setStatisticsId(fullResponse.getStatisticsId());
            
            fullResponse.setNumberOfVehicles(transportationDetails.getNumberOfVehicles());
            toUpdateAndSave.setNumberOfVehicles(fullResponse.getNumberOfVehicles());


            fullResponse.setVehicles(vehicles);

            // Calculate total emissions
            double totalTransportationEmission = vehicles.stream()
                    .mapToDouble(VehicleResponse::getVehicleCarbonEmission)
                    .sum();

            double totalReducedEmission = vehicles.stream()
                    .mapToDouble(VehicleResponse::getVehicleReducedCarbonEmission)
                    .sum();

            fullResponse.setTotalTransportationEmission(totalTransportationEmission);
            toUpdateAndSave.setTotalTransportationEmission(fullResponse.getTotalTransportationEmission());

            fullResponse.setTotalReducedEmission(totalReducedEmission);
            toUpdateAndSave.setTotalReducedEmission(fullResponse.getTotalReducedEmission());

            updateTransportationDetails(toUpdateAndSave.getTransportationDetailsId(), toUpdateAndSave);


            return fullResponse;
        }
        return null;
    }

    public List<TransportationDetails> getAllTransportationDetails(){
        return transportationDetailsRepo.findAll();
    }

    public Optional<TransportationDetails> getTransportationDetailsById(String id){
        return transportationDetailsRepo.findById(id);
    }

    public TransportationDetails addTransportationDetails(TransportationDetails transportationDetails){
        return transportationDetailsRepo.save(transportationDetails);
    }

    public TransportationDetails updateTransportationDetails(String id, TransportationDetails transportationDetails){

        if(transportationDetailsRepo.existsById(id)){
            transportationDetails.setTransportationDetailsId(id);
            return transportationDetailsRepo.save(transportationDetails);
        }
        else{
            return null;
        }
    }

    public TransportationDetails deleteTransportationDetails(String id){
        TransportationDetails transportationDetails = transportationDetailsRepo.findById(id).orElse(null);
        if(transportationDetails != null){
            transportationDetailsRepo.deleteById(id);
            return transportationDetails;
        }
        else{
            return null;
        }
    }

    public TransportationDetails getTransportationByStatisticsId(String statisticsId){
        return transportationDetailsRepo.findByStatisticsId(statisticsId);
    }
}
