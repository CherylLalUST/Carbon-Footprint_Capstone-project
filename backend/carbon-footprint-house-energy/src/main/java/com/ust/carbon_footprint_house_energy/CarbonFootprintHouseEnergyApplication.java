package com.ust.carbon_footprint_house_energy;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@SpringBootApplication
@EnableDiscoveryClient
@EnableMongoRepositories
public class CarbonFootprintHouseEnergyApplication {

	public static void main(String[] args) {
		SpringApplication.run(CarbonFootprintHouseEnergyApplication.class, args);
	}

}
