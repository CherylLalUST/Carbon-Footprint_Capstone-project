package com.ust.carbon_footprint_gateway;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class CarbonFootprintGatewayApplication {

	public static void main(String[] args) {
		SpringApplication.run(CarbonFootprintGatewayApplication.class, args);
	}

}
