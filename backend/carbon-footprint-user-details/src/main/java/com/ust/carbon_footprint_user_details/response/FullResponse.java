package com.ust.carbon_footprint_user_details.response;

import java.time.LocalDate;

public class FullResponse {

    private String userDetailsId;
    private String username;
    private int numberOfHousehold;
    private LocalDate dateAdded;
    private String countryName;
    private UserCredentialsResponse userCredentialsResponse;
    private CountryResponse countryResponse;

    public String getUserDetailsId() {
        return userDetailsId;
    }

    public void setUserDetailsId(String userDetailsId) {
        this.userDetailsId = userDetailsId;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public int getNumberOfHousehold() {
        return numberOfHousehold;
    }

    public void setNumberOfHousehold(int numberOfHousehold) {
        this.numberOfHousehold = numberOfHousehold;
    }

    public LocalDate getDateAdded() {
        return dateAdded;
    }

    public void setDateAdded(LocalDate dateAdded) {
        this.dateAdded = dateAdded;
    }

    public String getCountryName() {
        return countryName;
    }

    public void setCountryName(String countryName) {
        this.countryName = countryName;
    }

    public UserCredentialsResponse getUserCredentialsResponse() {
        return userCredentialsResponse;
    }

    public void setUserCredentialsResponse(UserCredentialsResponse userCredentialsResponse) {
        this.userCredentialsResponse = userCredentialsResponse;
    }

    public CountryResponse getCountryResponse() {
        return countryResponse;
    }

    public void setCountryResponse(CountryResponse countryResponse) {
        this.countryResponse = countryResponse;
    }

    public FullResponse() {
    }

    public FullResponse(String userDetailsId, String username, int numberOfHousehold, LocalDate dateAdded, String countryName, UserCredentialsResponse userCredentialsResponse, CountryResponse countryResponse) {
        this.userDetailsId = userDetailsId;
        this.username = username;
        this.numberOfHousehold = numberOfHousehold;
        this.dateAdded = dateAdded;
        this.countryName = countryName;
        this.userCredentialsResponse = userCredentialsResponse;
        this.countryResponse = countryResponse;
    }
}
