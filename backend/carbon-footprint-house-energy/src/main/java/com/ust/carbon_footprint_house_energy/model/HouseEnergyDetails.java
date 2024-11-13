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
    private String houseId;
    private double houseElectricity;
    private String houseElectricityType;
    private double houseNaturalGas;
    private String houseNaturalGasType;
    private double totalHouseEmission;
    private double totalHouseSavedEmission;
}
