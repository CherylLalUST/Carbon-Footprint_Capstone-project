package com.ust.carbon_footprint_waste_emission.service;

import com.ust.carbon_footprint_waste_emission.model.WasteDetails;
import com.ust.carbon_footprint_waste_emission.repo.WasteDetailsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class WasteDetailsService {

    @Autowired
    private WasteDetailsRepo wasteDetailsRepository;

    private static final double FOOD_COMPOST_EMISSION_FACTOR = 0.2;
    private static final double FOOD_NONCOMPOST_EMISSION_FACTOR = 1.9 * 28;
    private static final double  PLASTIC_RECYCLE_EMISSION_FACTOR = 1.5;
    private static final double  PLASTIC_NOTRECYCLE_EMISSION_FACTOR = 3;
    private static final double PAPER_RECYCLE_EMISSION_FACTOR = 1.3;
    private static final double PAPER_NOTRECYCLE_EMISSION_FACTOR = 1.3 * 28;
    private static final double GLASS_RECYCLE_EMISSION_FACTOR = 0.5;
    private static final double GLASS_NOTRECYCLE_EMISSION_FACTOR = 0.7;
    private static final double METAL_RECYCLE_EMISSION_FACTOR = 0.8;
    private static final double METAL_NOTRECYCLE_EMISSION_FACTOR = 1.85;
    private static final double EWASTE_RECYCLE_EMISSION_FACTOR = 0.8;
    private static final double EWASTE_NOTRECYCLE_EMISSION_FACTOR = 6.5;



    public void calculateWasteEmission(WasteDetails wasteDetails) {

        double foodEmission=0.0;
        double plasticEmission=0.0;
        double paperEmission=0.0;
        double glassEmission=0.0;
        double metalEmission=0.0;
        double eWasteEmission=0.0;

        foodEmission = wasteDetails.isFoodCompost()
                ? wasteDetails.getWasteFoodAmount() * FOOD_COMPOST_EMISSION_FACTOR
                : wasteDetails.getWasteFoodAmount() * FOOD_NONCOMPOST_EMISSION_FACTOR;

        plasticEmission = wasteDetails.isPlasticRecycle()
                ? wasteDetails.getWastePlasticAmount() * PLASTIC_RECYCLE_EMISSION_FACTOR
                : wasteDetails.getWastePlasticAmount() * PLASTIC_NOTRECYCLE_EMISSION_FACTOR;

        paperEmission=wasteDetails.isPaperRecycle()
                ? wasteDetails.getWastePaperAmount() * PAPER_RECYCLE_EMISSION_FACTOR
                : wasteDetails.getWastePaperAmount() * PAPER_NOTRECYCLE_EMISSION_FACTOR;

        glassEmission=wasteDetails.isGlassRecycle()
                ? wasteDetails.getWasteGlassAmount() * GLASS_RECYCLE_EMISSION_FACTOR
                : wasteDetails.getWasteGlassAmount() * GLASS_NOTRECYCLE_EMISSION_FACTOR;

        metalEmission=wasteDetails.isMetalRecycle()
                ? wasteDetails.getWasteMetalAmount() * METAL_RECYCLE_EMISSION_FACTOR
                : wasteDetails.getWasteMetalAmount() * METAL_NOTRECYCLE_EMISSION_FACTOR;

        eWasteEmission=wasteDetails.isEwasteRecycle()
                ? wasteDetails.getEwasteAmount() * EWASTE_RECYCLE_EMISSION_FACTOR
                : wasteDetails.getEwasteAmount() * EWASTE_NOTRECYCLE_EMISSION_FACTOR;

        double totalWaste = foodEmission + plasticEmission + paperEmission + glassEmission + metalEmission + eWasteEmission;

        wasteDetails.setTotalWasteEmission(totalWaste);
        calculateTotalSavedEmission(wasteDetails);

    }

    public Optional<WasteDetails> getWasteDetailsById(String wasteId) {
        return wasteDetailsRepository.findById(wasteId);
    }

    public WasteDetails getWasteDetailsByStatisticsId(String statisticsId){
        return wasteDetailsRepository.findByStatisticsId(statisticsId);
    }

    public WasteDetails addWasteDetails(WasteDetails wasteDetails) {
        calculateWasteEmission(wasteDetails);
        return wasteDetailsRepository.save(wasteDetails);
    }

    public WasteDetails deleteByWasteId(String id){
        WasteDetails wasteDetails = wasteDetailsRepository.findById(id).orElse(null);
        if(wasteDetails != null){
            wasteDetailsRepository.deleteById(id);
            return wasteDetails;
        }
        else{
            return null;
        }
    }

    public void calculateTotalSavedEmission(WasteDetails wasteDetails) {

        double foodEmission=0.0;
        double plasticEmission=0.0;
        double paperEmission=0.0;
        double glassEmission=0.0;
        double metalEmission=0.0;
        double eWasteEmission=0.0;

        foodEmission = wasteDetails.getWasteFoodAmount() * FOOD_COMPOST_EMISSION_FACTOR;

        plasticEmission = wasteDetails.getWastePlasticAmount() * PLASTIC_RECYCLE_EMISSION_FACTOR;

        paperEmission= wasteDetails.getWastePaperAmount() * PAPER_RECYCLE_EMISSION_FACTOR;

        glassEmission= wasteDetails.getWasteGlassAmount() * GLASS_RECYCLE_EMISSION_FACTOR;

        metalEmission = wasteDetails.getWasteMetalAmount() * METAL_RECYCLE_EMISSION_FACTOR;

        eWasteEmission= wasteDetails.getEwasteAmount() * EWASTE_RECYCLE_EMISSION_FACTOR;

        double totalWasteEmission = foodEmission + plasticEmission + paperEmission + glassEmission + metalEmission + eWasteEmission;

        wasteDetails.setReducedWasteEmission(totalWasteEmission);


    }
}
