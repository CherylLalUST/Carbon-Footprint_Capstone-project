package com.ust.carbon_footprint_user_details.response;

public class UserCredentialsResponse {

    private String userId;
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

    public UserCredentialsResponse() {
    }

    public UserCredentialsResponse(String userId, String username, String password) {
        this.userId = userId;
        this.username = username;
        this.password = password;
    }
}
