package com.ust.carbon_footprint_user_details.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDate;

@Document
public class UserDetails {
    @Id
    private String userDetailsId;
    private String username;
    private int numberOfHousehold;
    private LocalDate dateAdded;
    private String countryName;

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

    public UserDetails() {
    }

    public UserDetails(String userDetailsId, String username, int numberOfHousehold, LocalDate dateAdded, String countryName) {
        this.userDetailsId = userDetailsId;
        this.username = username;
        this.numberOfHousehold = numberOfHousehold;
        this.dateAdded = dateAdded;
        this.countryName = countryName;
    }
}
