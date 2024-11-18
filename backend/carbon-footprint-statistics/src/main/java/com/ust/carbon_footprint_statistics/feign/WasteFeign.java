package com.ust.carbon_footprint_statistics.feign;

import com.ust.carbon_footprint_statistics.response.WasteResponse;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient(name="carbon-footprint-waste-emission",
              url="http://localhost:9096/carbonFootprint/waste")
public interface WasteFeign {
    @GetMapping("/getWasteDetailsByStatisticsId/{statisticsId}")
    public WasteResponse getWasteDetailsByStatisticsId(@PathVariable ("statisticsId") String statisticsId);
}
