package com.ust.carbon_footprint_user_details.feign;

import com.ust.carbon_footprint_user_details.response.StatisticsResponse;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

@FeignClient(name="carbon-footprint-statistics"
        ,url="http://localhost:9098/carbonFootprint/statistics")
public interface StatisticsFeign {
    @GetMapping("/getStatisticsByUserDetailsId/{userDetailsId}")
    public List<StatisticsResponse> getStatisticsByUserDetailsId(@PathVariable("userDetailsId") String userDetailsId);
}
