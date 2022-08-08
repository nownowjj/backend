package com.e4net.backend.service;

import com.e4net.backend.domain.User;
import com.e4net.backend.dto.UserRequestDto;
import com.e4net.backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class UserService {

    private final UserRepository userRepository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    public void addUser(UserRequestDto userRequestDto){
        //받은 dto를 가지고 비밀번호 인코딩로직
        User entity = userRequestDto.toEntity();
        entity.encodePassword(bCryptPasswordEncoder);

        //데이터 저장
        userRepository.save(entity);
    }
}
