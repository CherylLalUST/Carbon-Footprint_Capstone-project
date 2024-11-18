package com.ust.carbon_footprint_statistics.feign;

import com.ust.carbon_footprint_statistics.response.HouseEnergyResponse;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient(name="carbon-footprint-house-energy",
              url="http://localhost:9097/carbonFootprint/houseEnergy")
public interface HouseEnergyFeign {
    @GetMapping("/getHouseEnergyDetailsByStatisticsId/{statisticsId}")
    public HouseEnergyResponse getHouseEnergyDetailsByStatisticsId(@PathVariable ("statisticsId") String statisticsId);
}
