package com.ust.carbon_footprint_user_details.service;


import com.ust.carbon_footprint_user_details.model.UserDetails;
import com.ust.carbon_footprint_user_details.repository.UserDetailsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserDetailsService {

    @Autowired
    private UserDetailsRepo userDetailsRepo;

    public UserDetails addUserDetails(UserDetails userDetails){
        return userDetailsRepo.save(userDetails);
    }

    public UserDetails getUserDetailsById(String userDetailsId){
        return userDetailsRepo.findById(userDetailsId).orElse(null);
    }

    public List<UserDetails> getAllUserDetails(){

        return userDetailsRepo.findAll();
    }

    public UserDetails updateUserDetails(String UserDetailsId,UserDetails userDetails){
        UserDetails existingUserDetails = userDetailsRepo.findById(userDetails.getUserDetailsId()).orElse(null);
        existingUserDetails.setNumberOfHousehold(userDetails.getNumberOfHousehold());
        existingUserDetails.setDateAdded(userDetails.getDateAdded());
        return userDetailsRepo.save(existingUserDetails);
    }

    public String deleteUserDetails(String userDetailsId){
        userDetailsRepo.deleteById(userDetailsId);
        return "User Details Deleted";
    }

}
