package com.ust.carbon_footprint_authentication_service.repo;

import com.ust.carbon_footprint_authentication_service.model.UserCredentials;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserCredentialsRepo extends MongoRepository<UserCredentials,String> {
    Optional<UserCredentials> findByUsername(String username);
}
