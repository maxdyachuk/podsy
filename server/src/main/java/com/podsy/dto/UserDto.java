package com.podsy.dto;

import javax.validation.constraints.*;

public class UserDto {

    @NotNull(message = "Name must not be null")
    @NotEmpty(message = "Name must not be empty")
    @Size(max = 128, message = "Name must be 128 characters at most")
    private String name;

    @NotNull(message = "Email must not be null")
    @Email(message = "Invalid email address format")
    @Size(max = 254, message = "Email must be 254 characters at most")
    private String email;

    @NotNull(message = "Password must not be null")
    @Pattern(
            regexp = "(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{6,}",
            message = "Password must contain at least one number, " +
                    "one uppercase and one lowercase letter, and at least 6 characters"
    )
    @Size(max = 128, message = "Password must be 128 characters at most")
    private String password;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
