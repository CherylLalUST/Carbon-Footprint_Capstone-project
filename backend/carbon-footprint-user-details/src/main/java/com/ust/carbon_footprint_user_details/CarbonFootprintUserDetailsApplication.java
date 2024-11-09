package com.ust.carbon_footprint_user_details;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@SpringBootApplication
@EnableFeignClients
@EnableMongoRepositories
public class CarbonFootprintUserDetailsApplication {

	public static void main(String[] args) {
		SpringApplication.run(CarbonFootprintUserDetailsApplication.class, args);
	}

}
