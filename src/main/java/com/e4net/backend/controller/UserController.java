package com.e4net.backend.controller;

import com.e4net.backend.dto.UserRequestDto;
import com.e4net.backend.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/user")
public class UserController {

    private final UserService userService;

    @PostMapping("/insert")
    public void addUser(@RequestBody UserRequestDto userRequestDto){
        userService.addUser(userRequestDto);
    }
}
