package com.ust.carbon_footprint_country_details.service;

import com.ust.carbon_footprint_country_details.model.Country;
import com.ust.carbon_footprint_country_details.repo.CountryRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CountryService {

    @Autowired
    private CountryRepo countryRepo;

    public List<Country> getAllCountries(){
        return countryRepo.findAll();
    }

    public Optional<Country> getCountryById(String id){
        return countryRepo.findById(id);
    }

    public Country addCountry(Country country){
        return countryRepo.save(country);
    }

    public Country updateCountry(String id, Country country){

        if(countryRepo.existsById(id)){
            country.setCountryId(id);
            return countryRepo.save(country);
        }
        else{
            return null;
        }
    }

    public Country deleteCountry(String id){
        Country country = countryRepo.findById(id).orElse(null);
        if(country != null){
            countryRepo.deleteById(id);
            return country;
        }
        else{
            return null;
        }
    }

    public Country getCountryByName(String countryName){
        return countryRepo.findByCountryName(countryName);
    }
}
