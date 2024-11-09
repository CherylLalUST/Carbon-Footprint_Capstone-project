package com.ust.carbon_footprint_user_details.response;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserCredentialsResponse {

    private String userId;
    private String username;
    private String password;
    // private String email;
    // private String role;
}
