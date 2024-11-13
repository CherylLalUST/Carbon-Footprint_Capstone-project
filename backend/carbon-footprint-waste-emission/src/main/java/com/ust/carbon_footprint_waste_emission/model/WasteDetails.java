package com.ust.carbon_footprint_waste_emission.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document
@NoArgsConstructor
@AllArgsConstructor
@Data
public class WasteDetails {
    @Id
    private String wasteId;
    private double wasteFoodAmount;
    private boolean foodCompost;
    private double wastePlasticAmount;
    private boolean plasticRecycle;
    private double wastePaperAmount;
    private boolean paperRecycle;
    private double wasteGlassAmount;
    private boolean glassRecycle;
    private double wasteMetalAmount;
    private boolean metalRecycle;
    private double ewasteAmount;
    private boolean ewasteRecycle;

    private double totalWasteEmission;
    private double reducedWasteEmission;

}
