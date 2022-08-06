package com.e4net.backend.repository;

import com.e4net.backend.domain.User;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;



@SpringBootTest
public class UserRepositoryTest {

    @Autowired
    UserRepository userRepository;

    @Test
    @Transactional
    public void addUserTest(){
        //given
        String email = "hello@email.com";
        String password = "123456";
        String username = "홍길동";

        userRepository.save(User.builder()
                .email(email)
                .username(username)
                .password(password)
                .build());

        //when
        List<User> usersList = userRepository.findAll();
        System.out.println(usersList.size());

        //then
        User user = usersList.get(usersList.size() - 1);
        Assertions.assertEquals(user.getEmail(), email);
        Assertions.assertEquals(user.getPassword(), password);
        Assertions.assertEquals(user.getUsername(), username);
    }
}
