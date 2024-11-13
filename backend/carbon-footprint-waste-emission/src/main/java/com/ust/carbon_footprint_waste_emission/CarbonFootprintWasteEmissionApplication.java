package com.ust.carbon_footprint_waste_emission;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@SpringBootApplication
@EnableDiscoveryClient
@EnableMongoRepositories
public class CarbonFootprintWasteEmissionApplication {

	public static void main(String[] args) {
		SpringApplication.run(CarbonFootprintWasteEmissionApplication.class, args);
	}

}
