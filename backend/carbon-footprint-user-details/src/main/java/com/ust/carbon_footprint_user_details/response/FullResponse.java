package com.ust.carbon_footprint_user_details.response;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;

import java.time.LocalDate;
import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class FullResponse {
    @Id
    private String userDetailsId;
    private String username;
    private int numberOfHousehold;
    private LocalDate dateAdded;
    private String countryName;
    private UserCredentialsResponse userCredentialsResponse;
    private CountryResponse countryResponse;
}
