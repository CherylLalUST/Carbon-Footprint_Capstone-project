package com.ust.carbon_footprint_authentication_service.service;

import com.ust.carbon_footprint_authentication_service.model.UserCredentials;
import com.ust.carbon_footprint_authentication_service.repo.UserCredentialsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    @Autowired
    private UserCredentialsRepo userCredentialsRepo;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<UserCredentials> user = userCredentialsRepo.findByUsername(username);

        return user.map(CustomUserDetails::new)
                .orElseThrow(() -> new UsernameNotFoundException("Username not found!"));
    }
}
