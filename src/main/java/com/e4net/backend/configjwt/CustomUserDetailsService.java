package com.e4net.backend.configjwt;

import com.e4net.backend.domain.User;
import com.e4net.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collection;


@Service
public class CustomUserDetailsService implements UserDetailsService {

    @Autowired
    UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        //username으로 디테일을 반환?
        User user = userRepository.findByUserName(username);
        if(user == null) throw new UsernameNotFoundException("User doesn't exist!!");

        //특정 자료형으로 ArrayList선언해줌
        //해당 리스트에 권한부여?
        Collection<SimpleGrantedAuthority> authorities = new ArrayList<>();
        authorities.add(new SimpleGrantedAuthority(user.getPassword()));

        //UserPrincipal자료형으로 user데이터를 담아서 반환한다.
        UserPrincipal userPrincipal = new UserPrincipal(
                user.getId(),
                user.getUsername(),
                user.getEmail(),
                user.getPassword(),
                authorities
        );

        return userPrincipal;
    }
}
