package com.ust.carbon_footprint_authentication_service.controller;

import com.ust.carbon_footprint_authentication_service.model.UserCredentials;
import com.ust.carbon_footprint_authentication_service.service.UserCredentialsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("/carbonFootprint/authentication")
public class UserCredentialsController {

    @Autowired
    private UserCredentialsService userCredentialsService;

    @Autowired
    private AuthenticationManager authenticationManager;

    @PostMapping("/register")
    public UserCredentials register(@RequestBody UserCredentials userCredentials){
        return userCredentialsService.register(userCredentials);
    }

    @GetMapping("/validateToken")
    public boolean validateToken(@RequestParam String token){
        return userCredentialsService.validateToken(token);
    }

    @PostMapping("/generateToken")
    public String generateToken(@RequestBody UserCredentials userCredentials){
        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(userCredentials.getUsername(),userCredentials.getPassword()));
        if(authentication.isAuthenticated()){
            return userCredentialsService.generateToken(userCredentials.getUsername());
        }
        return null;
    }

    @GetMapping("/getUserCredentialsByUsername/{username}")
    public Optional<UserCredentials> getUserCredentialsByUsername(@PathVariable String username){
        return userCredentialsService.getUserCredentialsByUsername(username);
    }

}
