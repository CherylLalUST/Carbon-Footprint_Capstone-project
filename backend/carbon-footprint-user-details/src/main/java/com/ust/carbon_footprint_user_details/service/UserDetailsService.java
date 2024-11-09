package com.ust.carbon_footprint_user_details.service;


import com.ust.carbon_footprint_user_details.feign.CountryFeign;
import com.ust.carbon_footprint_user_details.feign.UserCredentialsFeign;
import com.ust.carbon_footprint_user_details.model.UserDetails;
import com.ust.carbon_footprint_user_details.repository.UserDetailsRepo;
import com.ust.carbon_footprint_user_details.response.CountryResponse;
import com.ust.carbon_footprint_user_details.response.FullResponse;
import com.ust.carbon_footprint_user_details.response.UserCredentialsResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserDetailsService {

    @Autowired
    private UserDetailsRepo userDetailsRepo;

    @Autowired
    private UserCredentialsFeign userCredentialsFeign;

    @Autowired
    private CountryFeign countryFeign;

    public FullResponse getUserDetailsWithUsernameAndCountryName(String username, String countryName){
        UserDetails userDetails = userDetailsRepo.findByUsername(username).orElse(null);
        UserCredentialsResponse userCredentialsResponse = userCredentialsFeign.getUserCredentialsByUsername(username);
        CountryResponse countryResponse = countryFeign.getCountryByName(countryName);
        if(userDetails != null){
            FullResponse fullResponse = new FullResponse();
            fullResponse.setUserDetailsId(userDetails.getUserDetailsId());
            fullResponse.setUsername(userDetails.getUsername());
            fullResponse.setNumberOfHousehold(userDetails.getNumberOfHousehold());
            fullResponse.setDateAdded(userDetails.getDateAdded());
            fullResponse.setCountryName(userDetails.getCountryName());
            fullResponse.setUserCredentialsResponse(userCredentialsResponse);
            fullResponse.setCountryResponse(countryResponse);
            return fullResponse;
        }
        return null;
    }

    public UserDetails addUserDetails(UserDetails userDetails){
        return userDetailsRepo.save(userDetails);
    }

    public UserDetails getUserDetailsById(String userDetailsId){
        return userDetailsRepo.findById(userDetailsId).orElse(null);
    }

    public List<UserDetails> getAllUserDetails(){

        return userDetailsRepo.findAll();
    }

    public UserDetails updateUserDetails(String userDetailsId,UserDetails userDetails){
        if(userDetailsRepo.existsById(userDetailsId)){
            userDetails.setUserDetailsId(userDetailsId);
            return userDetailsRepo.save(userDetails);
        }
        return null;
    }

    public String deleteUserDetails(String userDetailsId){
        userDetailsRepo.deleteById(userDetailsId);
        return "User Details Deleted";
    }

}
