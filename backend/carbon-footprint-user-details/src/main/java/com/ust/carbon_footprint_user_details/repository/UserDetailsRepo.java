package com.ust.carbon_footprint_user_details.repository;

import com.ust.carbon_footprint_user_details.model.UserDetails;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserDetailsRepo extends MongoRepository<UserDetails,String> {
    Optional<UserDetails> findByUsername(String username);
}
