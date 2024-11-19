package com.ust.carbon_footprint_user_details.controller;

import com.ust.carbon_footprint_user_details.model.UserDetails;
import com.ust.carbon_footprint_user_details.response.FullResponse;
import com.ust.carbon_footprint_user_details.response.UserStatisticsResponse;
import com.ust.carbon_footprint_user_details.service.UserDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RequestMapping("/carbonFootprint/userDetails")
@RestController
public class UserDetailsController {

    @Autowired
    private UserDetailsService userDetailsService;

    @GetMapping("/getUserDetailsWithUsernameAndCountryName/{username}/{countryName}")
    public ResponseEntity<FullResponse> getUserDetailsWithUsernameAndCountryName(@PathVariable String username, @PathVariable String countryName){
        FullResponse fullResponse = userDetailsService.getUserDetailsWithUsernameAndCountryName(username,countryName);
        if(fullResponse != null){
            return ResponseEntity.status(HttpStatus.OK).body(fullResponse);
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
    }

    @PostMapping("/addUserDetails")
    public ResponseEntity<UserDetails> addUserDetails(@RequestBody UserDetails userDetails){
        UserDetails savedUserDetails= userDetailsService.addUserDetails(userDetails);
        return ResponseEntity.ok(savedUserDetails);
    }

    @GetMapping("/getUserDetailsById/{id}")
    public ResponseEntity<UserDetails> getAllUserDetailsById(@PathVariable String userDetailsId){
        UserDetails savedUserDetails= userDetailsService.getUserDetailsById(userDetailsId);
        return ResponseEntity.ok(savedUserDetails);
    }
    @GetMapping("/getAllUserDetails")
    public ResponseEntity<List<UserDetails>> getAllUserDetails(){
        List<UserDetails> savedUserDetails= userDetailsService.getAllUserDetails();
        return ResponseEntity.ok(savedUserDetails);
    }

    @GetMapping("/getUserDetailsByUsername/{username}")
    public ResponseEntity<UserDetails> getUserDetailsByUsername(@PathVariable String username){
        UserDetails savedUserDetails= userDetailsService.getUserDetailsByUsername(username).orElse(null);
        return ResponseEntity.ok(savedUserDetails);
    }

    @PutMapping("/updateUserDetails")
    public ResponseEntity<?> updateUserDetails(@PathVariable String userDetailsId,@RequestBody UserDetails user){
        UserDetails updatedUserDetails= userDetailsService.updateUserDetails(userDetailsId,user);
        if(updatedUserDetails==null){
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(updatedUserDetails);
    }
    @DeleteMapping("/deleteUserDetails")
    public ResponseEntity<String> deleteUserDetails(@PathVariable String userDetailsId){
        String deletedUserDetails=userDetailsService.deleteUserDetails(userDetailsId);
        if(deletedUserDetails!=null){
            return ResponseEntity.ok(deletedUserDetails);
        }
        return ResponseEntity.notFound().build();
    }

    @GetMapping("/getStatisticsByUserDetailsId/{userDetailsId}")
    public ResponseEntity<UserStatisticsResponse> getStatisticsByUserDetailsId(@PathVariable String userDetailsId) {
        UserStatisticsResponse userStatisticsResponse = userDetailsService.getStatisticsByUserDetailsId(userDetailsId);
        if (userStatisticsResponse != null) {
            return ResponseEntity.status(HttpStatus.OK).body(userStatisticsResponse);
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
    }
}
