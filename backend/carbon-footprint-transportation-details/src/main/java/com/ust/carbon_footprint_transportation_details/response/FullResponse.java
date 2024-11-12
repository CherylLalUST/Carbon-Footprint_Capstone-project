package com.ust.carbon_footprint_transportation_details.response;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class FullResponse {

    private String transportationDetailsId;
    private int numberOfVehicles;
    private List<VehicleResponse> vehicles;

}
