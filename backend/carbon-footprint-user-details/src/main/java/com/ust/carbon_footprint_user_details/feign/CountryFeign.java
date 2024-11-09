package com.ust.carbon_footprint_user_details.feign;

import org.springframework.cloud.openfeign.FeignClient;

@FeignClient(name="carbon-footprint-country-service")
public interface CountryFeign {
}
