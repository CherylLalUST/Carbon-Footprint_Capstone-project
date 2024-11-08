package com.ust.carbon_footprint_country_details.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Country {

    @Id
    private String countryId;
    private String country;
    private String countryCode;
    private String year;
    private Long annualEmissions;
}
