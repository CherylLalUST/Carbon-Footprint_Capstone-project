package com.ust.carbon_footprint_statistics;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@SpringBootApplication
@EnableMongoRepositories
@EnableDiscoveryClient
@EnableFeignClients
public class CarbonFootprintStatisticsApplication {

	public static void main(String[] args) {
		SpringApplication.run(CarbonFootprintStatisticsApplication.class, args);
	}

}
