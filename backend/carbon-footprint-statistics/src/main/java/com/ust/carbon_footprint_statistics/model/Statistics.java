package com.ust.carbon_footprint_statistics.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDate;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Document
public class Statistics {
    @Id
    private String statisticsId;
    private LocalDate statisticsDate;
    private double totalEmission;
}
