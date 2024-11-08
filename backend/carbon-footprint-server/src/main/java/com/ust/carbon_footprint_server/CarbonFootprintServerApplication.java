package com.ust.carbon_footprint_server;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;

@EnableEurekaServer
@SpringBootApplication
public class CarbonFootprintServerApplication {

	public static void main(String[] args) {
		SpringApplication.run(CarbonFootprintServerApplication.class, args);
	}

}
