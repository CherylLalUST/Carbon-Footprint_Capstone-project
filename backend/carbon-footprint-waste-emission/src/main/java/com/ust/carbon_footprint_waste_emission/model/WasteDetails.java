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
    private boolean isFoodCompost;
    private double wastePlasticAmount;
    private boolean isPlasticRecycle;
    private double wastePaperAmount;
    private boolean isPaperRecycle;
    private double wasteGlassAmount;
    private boolean isGlassRecycle;
    private double wasteMetalAmount;
    private boolean isMetalRecycle;
    private double eWasteAmount;
    private boolean isEwasteRecycle;
    private double totalWasteEmission;
    //private List<Double> emissions;
    private double savedEmission;

}
