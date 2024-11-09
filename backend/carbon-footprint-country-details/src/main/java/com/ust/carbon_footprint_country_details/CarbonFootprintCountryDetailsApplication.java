package com.ust.carbon_footprint_country_details;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@SpringBootApplication
@EnableMongoRepositories
@EnableDiscoveryClient
public class CarbonFootprintCountryDetailsApplication {

	public static void main(String[] args) {
		SpringApplication.run(CarbonFootprintCountryDetailsApplication.class, args);
	}

}
