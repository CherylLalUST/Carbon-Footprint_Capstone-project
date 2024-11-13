package com.ust.carbon_footprint_house_energy.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Document
public class HouseEnergyDetails {
    @Id
    private String id;
    private double electricity;
    private double naturalGas;
}
