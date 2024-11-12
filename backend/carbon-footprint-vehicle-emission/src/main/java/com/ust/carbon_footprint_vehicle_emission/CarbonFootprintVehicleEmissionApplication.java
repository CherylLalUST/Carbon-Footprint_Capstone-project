package com.ust.carbon_footprint_vehicle_emission;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@SpringBootApplication
@EnableDiscoveryClient
@EnableMongoRepositories
public class CarbonFootprintVehicleEmissionApplication {

	public static void main(String[] args) {
		SpringApplication.run(CarbonFootprintVehicleEmissionApplication.class, args);
	}

}
