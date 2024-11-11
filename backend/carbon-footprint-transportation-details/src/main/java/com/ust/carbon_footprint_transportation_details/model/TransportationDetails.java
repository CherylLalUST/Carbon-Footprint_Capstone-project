package com.ust.carbon_footprint_transportation_details.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
@Data
@AllArgsConstructor
@NoArgsConstructor
public class TransportationDetails {
    private String transportationDetailsId;
    private int numberOfVehicles;
}
