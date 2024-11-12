package com.ust.carbon_footprint_transportation_details.feign;

import com.ust.carbon_footprint_transportation_details.response.VehicleResponse;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

@FeignClient(name = "carbon-footprint-vehicle-emission",url = "http://localhost:9095/carbonFootprint/vehicles")
public interface VehicleFeign {

    @GetMapping("/getVehiclesByTransportationId/{transportationDetailsId}")
    List<VehicleResponse> getVehiclesByTransportationId(@PathVariable("transportationDetailsId") String transportationDetailsId);
}
