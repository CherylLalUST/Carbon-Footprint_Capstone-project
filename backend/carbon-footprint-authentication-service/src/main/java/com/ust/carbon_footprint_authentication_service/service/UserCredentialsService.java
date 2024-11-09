package com.ust.carbon_footprint_authentication_service.service;

import com.ust.carbon_footprint_authentication_service.model.UserCredentials;
import com.ust.carbon_footprint_authentication_service.repo.UserCredentialsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserCredentialsService {

    @Autowired
    private UserCredentialsRepo userCredentialsRepo;

    @Autowired
    private JwtService jwtService;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public UserCredentials register(UserCredentials userCredentials){
        userCredentials.setPassword(passwordEncoder.encode(userCredentials.getPassword()));
        return userCredentialsRepo.save(userCredentials);
    }

    public boolean validateToken(String token){
        jwtService.validateToken(token);
        return true;
    }

    public String generateToken(String username){
        return jwtService.generateToken(username);
    }

    public Optional<UserCredentials> getUserCredentialsByUsername(String username){
        return userCredentialsRepo.findByUsername(username);
    }
}
