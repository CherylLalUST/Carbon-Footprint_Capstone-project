package com.ust.carbon_footprint_authentication_service.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserCredentials {

    // check again
    @Id
    private String user_id;
    private String username;
    private String password;
    // private String email;
    // private String role;
}
