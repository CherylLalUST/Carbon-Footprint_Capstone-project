package com.ust.carbon_footprint_statistics.feign;

import com.ust.carbon_footprint_statistics.response.TransportationResponse;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient(name="carbon-footprint-transportation-details",
        url="http://localhost:9094/carbonFootprint/transportationDetails")
public interface TransportationFeign {
    @GetMapping("/getTransportationByStatisticsId/{statisticsId}")
    public TransportationResponse getTransportationByStatisticsId(@PathVariable("statisticsId") String statisticsId);
}
