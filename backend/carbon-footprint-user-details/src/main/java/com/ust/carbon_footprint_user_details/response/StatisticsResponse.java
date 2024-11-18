package com.ust.carbon_footprint_user_details.response;

import java.time.LocalDate;

public class StatisticsResponse {

    private String statisticsId;
    private LocalDate statisticsDate;
    private double totalTransportationEmission;
    private double totalWasteEmission;
    private double totalHouseEnergyEmission;
    private double totalEmission;
    private String userDetailsId;

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

    public String getUserDetailsId() {
        return userDetailsId;
    }

    public void setUserDetailsId(String userDetailsId) {
        this.userDetailsId = userDetailsId;
    }

    public StatisticsResponse() {
    }

    public StatisticsResponse(String statisticsId, LocalDate statisticsDate, double totalTransportationEmission, double totalWasteEmission, double totalHouseEnergyEmission, double totalEmission, String userDetailsId) {
        this.statisticsId = statisticsId;
        this.statisticsDate = statisticsDate;
        this.totalTransportationEmission = totalTransportationEmission;
        this.totalWasteEmission = totalWasteEmission;
        this.totalHouseEnergyEmission = totalHouseEnergyEmission;
        this.totalEmission = totalEmission;
        this.userDetailsId = userDetailsId;
    }
}
