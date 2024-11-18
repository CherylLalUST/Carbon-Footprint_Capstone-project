package com.ust.carbon_footprint_statistics.response;

public class WasteResponse {
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
    private String statisticsId;

    public String getWasteId() {
        return wasteId;
    }

    public void setWasteId(String wasteId) {
        this.wasteId = wasteId;
    }

    public double getWasteFoodAmount() {
        return wasteFoodAmount;
    }

    public void setWasteFoodAmount(double wasteFoodAmount) {
        this.wasteFoodAmount = wasteFoodAmount;
    }

    public boolean isFoodCompost() {
        return foodCompost;
    }

    public void setFoodCompost(boolean foodCompost) {
        this.foodCompost = foodCompost;
    }

    public double getWastePlasticAmount() {
        return wastePlasticAmount;
    }

    public void setWastePlasticAmount(double wastePlasticAmount) {
        this.wastePlasticAmount = wastePlasticAmount;
    }

    public boolean isPlasticRecycle() {
        return plasticRecycle;
    }

    public void setPlasticRecycle(boolean plasticRecycle) {
        this.plasticRecycle = plasticRecycle;
    }

    public double getWastePaperAmount() {
        return wastePaperAmount;
    }

    public void setWastePaperAmount(double wastePaperAmount) {
        this.wastePaperAmount = wastePaperAmount;
    }

    public boolean isPaperRecycle() {
        return paperRecycle;
    }

    public void setPaperRecycle(boolean paperRecycle) {
        this.paperRecycle = paperRecycle;
    }

    public double getWasteGlassAmount() {
        return wasteGlassAmount;
    }

    public void setWasteGlassAmount(double wasteGlassAmount) {
        this.wasteGlassAmount = wasteGlassAmount;
    }

    public boolean isGlassRecycle() {
        return glassRecycle;
    }

    public void setGlassRecycle(boolean glassRecycle) {
        this.glassRecycle = glassRecycle;
    }

    public double getWasteMetalAmount() {
        return wasteMetalAmount;
    }

    public void setWasteMetalAmount(double wasteMetalAmount) {
        this.wasteMetalAmount = wasteMetalAmount;
    }

    public boolean isMetalRecycle() {
        return metalRecycle;
    }

    public void setMetalRecycle(boolean metalRecycle) {
        this.metalRecycle = metalRecycle;
    }

    public double getEwasteAmount() {
        return ewasteAmount;
    }

    public void setEwasteAmount(double ewasteAmount) {
        this.ewasteAmount = ewasteAmount;
    }

    public boolean isEwasteRecycle() {
        return ewasteRecycle;
    }

    public void setEwasteRecycle(boolean ewasteRecycle) {
        this.ewasteRecycle = ewasteRecycle;
    }

    public double getTotalWasteEmission() {
        return totalWasteEmission;
    }

    public void setTotalWasteEmission(double totalWasteEmission) {
        this.totalWasteEmission = totalWasteEmission;
    }

    public double getReducedWasteEmission() {
        return reducedWasteEmission;
    }

    public void setReducedWasteEmission(double reducedWasteEmission) {
        this.reducedWasteEmission = reducedWasteEmission;
    }

    public String getStatisticsId() {
        return statisticsId;
    }

    public void setStatisticsId(String statisticsId) {
        this.statisticsId = statisticsId;
    }

    public WasteResponse() {
    }

    public WasteResponse(String wasteId, double wasteFoodAmount, boolean foodCompost, double wastePlasticAmount, boolean plasticRecycle, double wastePaperAmount, boolean paperRecycle, double wasteGlassAmount, boolean glassRecycle, double wasteMetalAmount, boolean metalRecycle, double ewasteAmount, boolean ewasteRecycle, double totalWasteEmission, double reducedWasteEmission, String statisticsId) {
        this.wasteId = wasteId;
        this.wasteFoodAmount = wasteFoodAmount;
        this.foodCompost = foodCompost;
        this.wastePlasticAmount = wastePlasticAmount;
        this.plasticRecycle = plasticRecycle;
        this.wastePaperAmount = wastePaperAmount;
        this.paperRecycle = paperRecycle;
        this.wasteGlassAmount = wasteGlassAmount;
        this.glassRecycle = glassRecycle;
        this.wasteMetalAmount = wasteMetalAmount;
        this.metalRecycle = metalRecycle;
        this.ewasteAmount = ewasteAmount;
        this.ewasteRecycle = ewasteRecycle;
        this.totalWasteEmission = totalWasteEmission;
        this.reducedWasteEmission = reducedWasteEmission;
        this.statisticsId = statisticsId;
    }
}
