package com.ust.carbon_footprint_user_details.feign;

import com.ust.carbon_footprint_user_details.response.CountryResponse;
import com.ust.carbon_footprint_user_details.response.UserCredentialsResponse;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient(name="carbon-footprint-country-details"
        ,url="http://localhost:9093/carbonFootprint/country")
public interface CountryFeign {
    @GetMapping("/getCountryByName/{countryName}")
    public CountryResponse getCountryByName(@PathVariable("countryName") String countryName);
}
