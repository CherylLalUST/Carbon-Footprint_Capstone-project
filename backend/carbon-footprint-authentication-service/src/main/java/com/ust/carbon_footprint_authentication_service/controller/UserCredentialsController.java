package com.ust.carbon_footprint_authentication_service.controller;

import com.mongodb.MongoWriteException;
import com.ust.carbon_footprint_authentication_service.model.UserCredentials;
import com.ust.carbon_footprint_authentication_service.service.UserCredentialsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.time.LocalDate;
import java.util.HashMap;
import java.util.Map;
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
        try{
            return userCredentialsService.register(userCredentials);
        }catch(Exception e){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Username already Exists!", e);
        }
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

//    @ExceptionHandler({Exception.class})
//    public ResponseEntity<Map<String, String>> handleDuplicateUsername(){
//        Map<String, String> mapError = new HashMap<>();
//        mapError.put("message", "Username already Exists!");
//        //mapError.put("timestamp", LocalDate().now().toString());
//        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(mapError);
//    }
}
