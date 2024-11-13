package com.ust.carbon_footprint_waste_emission.service;

import com.ust.carbon_footprint_waste_emission.model.WasteDetails;
import com.ust.carbon_footprint_waste_emission.repo.WasteDetailsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;
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
        double ewasteEmission=0.0;

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

        ewasteEmission=wasteDetails.isEwasteRecycle()
                ? wasteDetails.getEWasteAmount() * EWASTE_RECYCLE_EMISSION_FACTOR
                : wasteDetails.getEWasteAmount() * EWASTE_NOTRECYCLE_EMISSION_FACTOR;

        double totalWaste = foodEmission + plasticEmission + paperEmission + glassEmission + metalEmission + ewasteEmission;

        wasteDetails.setTotalWasteEmission(totalWaste);
        calculateTotalSavedEmission(wasteDetails);

    }

    public Optional<WasteDetails> getWasteDetailsById(String wasteId) {
        return wasteDetailsRepository.findById(wasteId);
    }

    public WasteDetails addWasteDetails(WasteDetails wasteDetails) {
        calculateWasteEmission(wasteDetails);
        return wasteDetailsRepository.save(wasteDetails);
    }

    public void calculateTotalSavedEmission(WasteDetails wasteDetails) {
        double savedEmission = 0.0;

        // Calculate potential emissions if not recycled (non-composite or non-recycled)
        double potentialFoodEmission = wasteDetails.getWasteFoodAmount() * FOOD_NONCOMPOST_EMISSION_FACTOR;
        double potentialPlasticEmission = wasteDetails.getWastePlasticAmount() * PLASTIC_NOTRECYCLE_EMISSION_FACTOR;
        double potentialPaperEmission = wasteDetails.getWastePaperAmount() * PAPER_NOTRECYCLE_EMISSION_FACTOR;
        double potentialGlassEmission = wasteDetails.getWasteGlassAmount() * GLASS_NOTRECYCLE_EMISSION_FACTOR;
        double potentialMetalEmission = wasteDetails.getWasteMetalAmount() * METAL_NOTRECYCLE_EMISSION_FACTOR;
        double potentialEWasteEmission = wasteDetails.getEWasteAmount() * EWASTE_NOTRECYCLE_EMISSION_FACTOR;

        // Calculate actual emissions based on recycling status
        double actualFoodEmission = wasteDetails.isFoodCompost() ? wasteDetails.getWasteFoodAmount() * FOOD_COMPOST_EMISSION_FACTOR : potentialFoodEmission;
        double actualPlasticEmission = wasteDetails.isPlasticRecycle() ? wasteDetails.getWastePlasticAmount() * PLASTIC_RECYCLE_EMISSION_FACTOR : potentialPlasticEmission;
        double actualPaperEmission = wasteDetails.isPaperRecycle() ? wasteDetails.getWastePaperAmount() * PAPER_RECYCLE_EMISSION_FACTOR : potentialPaperEmission;
        double actualGlassEmission = wasteDetails.isGlassRecycle() ? wasteDetails.getWasteGlassAmount() * GLASS_RECYCLE_EMISSION_FACTOR : potentialGlassEmission;
        double actualMetalEmission = wasteDetails.isMetalRecycle() ? wasteDetails.getWasteMetalAmount() * METAL_RECYCLE_EMISSION_FACTOR : potentialMetalEmission;
        double actualEWasteEmission = wasteDetails.isEwasteRecycle() ? wasteDetails.getEWasteAmount() * EWASTE_RECYCLE_EMISSION_FACTOR : potentialEWasteEmission;

        // Calculate saved emissions for each waste type
        savedEmission += potentialFoodEmission - actualFoodEmission;
        savedEmission += potentialPlasticEmission - actualPlasticEmission;
        savedEmission += potentialPaperEmission - actualPaperEmission;
        savedEmission += potentialGlassEmission - actualGlassEmission;
        savedEmission += potentialMetalEmission - actualMetalEmission;
        savedEmission += potentialEWasteEmission - actualEWasteEmission;

        wasteDetails.setSavedEmission(savedEmission);
        //wasteDetailsRepository.save(wasteDetails);

    }
}
