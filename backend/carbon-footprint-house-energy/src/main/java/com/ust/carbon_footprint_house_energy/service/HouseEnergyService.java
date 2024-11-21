package com.ust.carbon_footprint_house_energy.service;

import com.ust.carbon_footprint_house_energy.model.HouseEnergyDetails;
import com.ust.carbon_footprint_house_energy.repo.HouseEnergyRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class HouseEnergyService {
    private static final double ELECTRICITY_NON_RENEWABLE_EMISSION_FACTOR = 0.9;
    private static final double ELECTRICITY_RENEWABLE_EMISSION_FACTOR = 0.02;
    private static final double ELECTRICITY_HYBRID_EMISSION_FACTOR=0.45;
    private static final double  GAS_HYBRID_EMISSION_FACTOR = 1.27;
    private static final double  GAS_LPG_EMISSION_FACTOR = 2.98;

    @Autowired
    private HouseEnergyRepo houseEnergyRepo;

        public void calculateHomeEnergyEmission(HouseEnergyDetails houseEnergyDetails) {
            double electricityEmission = 0.0;

            switch (houseEnergyDetails.getHouseElectricityType()) {
                case "Non-Renewable":
                    electricityEmission = houseEnergyDetails.getHouseElectricity() * ELECTRICITY_NON_RENEWABLE_EMISSION_FACTOR;
                    break;
                case "Renewable":
                    electricityEmission = houseEnergyDetails.getHouseElectricity() * ELECTRICITY_RENEWABLE_EMISSION_FACTOR;
                    break;
                default: // Hybrid
                    electricityEmission = houseEnergyDetails.getHouseElectricity() * ELECTRICITY_HYBRID_EMISSION_FACTOR;
                    break;
            }

            double gasEnergyEmission = houseEnergyDetails.getHouseNaturalGasType().equals("LPG")
                    ? houseEnergyDetails.getHouseNaturalGas() * GAS_LPG_EMISSION_FACTOR
                    : houseEnergyDetails.getHouseNaturalGas() * GAS_HYBRID_EMISSION_FACTOR;

            double totalHouseEmission= electricityEmission + gasEnergyEmission;

            houseEnergyDetails.setTotalHouseEmission(totalHouseEmission);

        }

    public HouseEnergyDetails addHouseEnergyDetails(HouseEnergyDetails houseEnergyDetails) {
        calculateHomeEnergyEmission(houseEnergyDetails);
        return houseEnergyRepo.save(houseEnergyDetails);
    }

    public Optional<HouseEnergyDetails> getHouseEnergyDetailsById(String houseId) {
        return houseEnergyRepo.findById(houseId);
    }

    public HouseEnergyDetails getHouseEnergyDetailsByStatisticsId(String statisticsId){
        return houseEnergyRepo.findByStatisticsId(statisticsId);
    }
}
