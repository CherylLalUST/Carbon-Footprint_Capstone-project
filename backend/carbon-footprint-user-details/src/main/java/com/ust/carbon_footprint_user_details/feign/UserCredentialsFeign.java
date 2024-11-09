package com.ust.carbon_footprint_user_details.feign;

import com.ust.carbon_footprint_user_details.response.UserCredentialsResponse;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient(name="carbon-footprint-authentication-service"
        ,url="http://localhost:9091/carbonFootprint/authentication")
public interface UserCredentialsFeign {
    @GetMapping("/getUserCredentialsByUsername/{username}")
    public UserCredentialsResponse getUserCredentialsByUsername(@PathVariable("username") String username);

}
