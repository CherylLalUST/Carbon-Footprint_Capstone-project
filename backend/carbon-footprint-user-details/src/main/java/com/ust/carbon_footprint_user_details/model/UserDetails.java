package com.ust.carbon_footprint_user_details.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDate;
import java.util.Date;

@Document
@AllArgsConstructor
@NoArgsConstructor
@Data
public class UserDetails {
    @Id
    private String userDetailsId;
    private String username;
    private int numberOfHousehold;
    private LocalDate dateAdded;
    private String countryName;
}
