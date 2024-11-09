package com.ust.carbon_footprint_country_details.repo;

import com.ust.carbon_footprint_country_details.model.Country;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CountryRepo extends MongoRepository<Country,String> {
    Country findByCountryName(String countryName);
}
