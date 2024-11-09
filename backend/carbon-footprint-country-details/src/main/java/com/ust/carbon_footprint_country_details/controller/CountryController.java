package com.ust.carbon_footprint_country_details.controller;

import com.ust.carbon_footprint_country_details.model.Country;
import com.ust.carbon_footprint_country_details.service.CountryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.concurrent.Callable;

@RestController
@RequestMapping("/carbonFootprint/country")
public class CountryController {

    @Autowired
    private CountryService countryService;

    @GetMapping("/getAllCountries")
    public ResponseEntity<List<Country>> getAllCountries(){
        List<Country> countries = countryService.getAllCountries();
        return ResponseEntity.status(HttpStatus.OK).body(countries);
    }

    @GetMapping("/getCountryById/{id}")
    public ResponseEntity<Optional<Country>> getCountryById(@PathVariable String id){
        Optional<Country> country = countryService.getCountryById(id);
        if(country.isPresent()){
            return ResponseEntity.status(HttpStatus.OK).body(country);
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
    }

    @PostMapping("/addCountry")
    public ResponseEntity<Country> addCountry(@RequestBody Country country){
        countryService.addCountry(country);
        return ResponseEntity.status(HttpStatus.OK).body(country);
    }

    @PutMapping("/updateCountry/{id}")
    public ResponseEntity<?> updateCountry(@PathVariable String id,@RequestBody Country country){

        Country returedCountry = countryService.updateCountry(id,country);
        if(returedCountry == null){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Country not found");
        }
        return ResponseEntity.status(HttpStatus.OK).body(returedCountry);
    }

    @GetMapping("/getCountryByName/{name}")
    public String CountryName(@RequestParam String countryId){
        Country country= countryService.getCountryById(countryId);
        if(country!=null){
            return country.getCountry();
        }
        else{
            return null;
        }
    }

    @DeleteMapping("/deleteCountry/{id}")
    public ResponseEntity<?> deleteCountry(@PathVariable String id){
        Country returedCountry = countryService.deleteCountry(id);
        if(returedCountry == null){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Country not found");
        }
        return ResponseEntity.status(HttpStatus.OK).body(returedCountry);
        }




}
