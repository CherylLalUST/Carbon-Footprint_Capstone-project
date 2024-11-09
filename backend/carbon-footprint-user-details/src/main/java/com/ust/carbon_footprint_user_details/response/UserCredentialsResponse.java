package com.ust.carbon_footprint_user_details.response;

import org.springframework.data.annotation.Id;

public class UserCredentialsResponse {
    @Id
    private String userId;
    private String username;
    private String password;
    // private String email;
    // private String role;
}
