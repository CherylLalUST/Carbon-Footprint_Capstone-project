package com.ust.carbon_footprint_transportation_details;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@SpringBootApplication
@EnableDiscoveryClient
@EnableMongoRepositories
@EnableFeignClients
public class CarbonFootprintTransportationDetailsApplication {

	public static void main(String[] args) {
		SpringApplication.run(CarbonFootprintTransportationDetailsApplication.class, args);
	}

}
