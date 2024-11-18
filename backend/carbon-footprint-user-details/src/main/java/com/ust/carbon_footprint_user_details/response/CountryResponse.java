package com.ust.carbon_footprint_user_details.response;

public class CountryResponse {

    private String countryId;
    private String countryName;
    private String countryCode;
    private String year;
    private Long annualEmissions;

    public String getCountryId() {
        return countryId;
    }

    public void setCountryId(String countryId) {
        this.countryId = countryId;
    }

    public String getCountryName() {
        return countryName;
    }

    public void setCountryName(String countryName) {
        this.countryName = countryName;
    }

    public String getCountryCode() {
        return countryCode;
    }

    public void setCountryCode(String countryCode) {
        this.countryCode = countryCode;
    }

    public String getYear() {
        return year;
    }

    public void setYear(String year) {
        this.year = year;
    }

    public Long getAnnualEmissions() {
        return annualEmissions;
    }

    public void setAnnualEmissions(Long annualEmissions) {
        this.annualEmissions = annualEmissions;
    }

    public CountryResponse() {
    }

    public CountryResponse(String countryId, String countryName, String countryCode, String year, Long annualEmissions) {
        this.countryId = countryId;
        this.countryName = countryName;
        this.countryCode = countryCode;
        this.year = year;
        this.annualEmissions = annualEmissions;
    }
}
