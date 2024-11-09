package com.ust.carbon_footprint_user_details.response;

import org.springframework.data.annotation.Id;

import java.time.LocalDate;
import java.util.Date;

public class FullResponse {
    @Id
    private String userDetailsId;
    private int numberOfHousehold;
    private LocalDate dateAdded;
    private UserCredentialsResponse userCredentialsResponse;
}
