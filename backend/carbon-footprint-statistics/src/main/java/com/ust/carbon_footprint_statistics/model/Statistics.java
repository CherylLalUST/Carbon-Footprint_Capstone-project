package com.ust.carbon_footprint_statistics.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDate;

@Document
public class Statistics {
    @Id
    private String statisticsId;
    private LocalDate statisticsDate;
    private double totalTransportationEmission;
    private double totalWasteEmission;
    private double totalHouseEnergyEmission;
    private double totalEmission;

    public String getStatisticsId() {
        return statisticsId;
    }

    public void setStatisticsId(String statisticsId) {
        this.statisticsId = statisticsId;
    }

    public LocalDate getStatisticsDate() {
        return statisticsDate;
    }

    public void setStatisticsDate(LocalDate statisticsDate) {
        this.statisticsDate = statisticsDate;
    }

    public double getTotalTransportationEmission() {
        return totalTransportationEmission;
    }

    public void setTotalTransportationEmission(double totalTransportationEmission) {
        this.totalTransportationEmission = totalTransportationEmission;
    }

    public double getTotalWasteEmission() {
        return totalWasteEmission;
    }

    public void setTotalWasteEmission(double totalWasteEmission) {
        this.totalWasteEmission = totalWasteEmission;
    }

    public double getTotalHouseEnergyEmission() {
        return totalHouseEnergyEmission;
    }

    public void setTotalHouseEnergyEmission(double totalHouseEnergyEmission) {
        this.totalHouseEnergyEmission = totalHouseEnergyEmission;
    }

    public double getTotalEmission() {
        return totalEmission;
    }

    public void setTotalEmission(double totalEmission) {
        this.totalEmission = totalEmission;
    }

    public Statistics() {
    }

    public Statistics(String statisticsId, LocalDate statisticsDate, double totalTransportationEmission, double totalWasteEmission, double totalHouseEnergyEmission, double totalEmission) {
        this.statisticsId = statisticsId;
        this.statisticsDate = statisticsDate;
        this.totalTransportationEmission = totalTransportationEmission;
        this.totalWasteEmission = totalWasteEmission;
        this.totalHouseEnergyEmission = totalHouseEnergyEmission;
        this.totalEmission = totalEmission;
    }
}
