package com.ust.carbon_footprint_user_details.response;

import java.time.LocalDate;
import java.util.List;

public class UserStatisticsResponse {

    private String userDetailsId;
    private String username;
    private int numberOfHousehold;
    private LocalDate dateAdded;
    private String countryName;
    private List<StatisticsResponse> statisticsResponses;

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

    public List<StatisticsResponse> getStatisticsResponses() {
        return statisticsResponses;
    }

    public void setStatisticsResponses(List<StatisticsResponse> statisticsResponses) {
        this.statisticsResponses = statisticsResponses;
    }

    public UserStatisticsResponse() {
    }

    public UserStatisticsResponse(String userDetailsId, String username, int numberOfHousehold, LocalDate dateAdded, String countryName, List<StatisticsResponse> statisticsResponses) {
        this.userDetailsId = userDetailsId;
        this.username = username;
        this.numberOfHousehold = numberOfHousehold;
        this.dateAdded = dateAdded;
        this.countryName = countryName;
        this.statisticsResponses = statisticsResponses;
    }
}
