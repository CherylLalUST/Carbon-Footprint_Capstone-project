package com.ust.carbon_footprint_statistics.response;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDate;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Document
public class FullResponse {
    @Id
    private String statisticsId;
    private LocalDate statisticsDate;
    private double totalEmission;
    private HouseEnergyResponse houseEnergyResponse;
    private TransportationResponse transportationResponse;
    private WasteResponse wasteResponse;
}