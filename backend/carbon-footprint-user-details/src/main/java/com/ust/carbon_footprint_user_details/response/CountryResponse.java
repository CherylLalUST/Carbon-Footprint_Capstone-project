package com.ust.carbon_footprint_user_details.response;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CountryResponse {

    private String countryId;
    private String countryName;
    private String countryCode;
    private String year;
    private Long annualEmissions;

}
