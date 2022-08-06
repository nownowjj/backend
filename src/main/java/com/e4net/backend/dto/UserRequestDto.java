package com.e4net.backend.dto;

import com.e4net.backend.domain.Role;
import com.e4net.backend.domain.User;
import lombok.Data;

@Data
public class UserRequestDto {

    private String email;

    private String password;

    private String username;

    public User toEntity(){
        return User.builder()
                .email(email)
                .username(username)
                .password(password)
                .role(Role.ROLE_USER)
                .build();
    }
}
