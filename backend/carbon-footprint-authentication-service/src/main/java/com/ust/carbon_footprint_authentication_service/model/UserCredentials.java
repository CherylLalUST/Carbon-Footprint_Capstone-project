package com.ust.carbon_footprint_authentication_service.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class UserCredentials {

    // check again
    @Id
    private String userId;
    @Indexed(unique = true)
    private String username;
    private String password;
    // private String email;
    // private String role;


    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public UserCredentials() {
    }

    public UserCredentials(String userId, String username, String password) {
        this.userId = userId;
        this.username = username;
        this.password = password;
    }
}
