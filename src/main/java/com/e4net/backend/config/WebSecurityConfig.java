package com.e4net.backend.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class WebSecurityConfig {

    //spring security에서 입력된 비밀번호를 인코딩해준다.
    @Bean
    public BCryptPasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {

        http
                .cors() //Cross Origin Resource Sharing
                    .and()
                .csrf()
                    .disable() //rest api는 csrf 보안이 필요없으므로 disable 처리
                .authorizeRequests()
                .mvcMatchers(HttpMethod.OPTIONS, "/**").permitAll()
                .antMatchers("/api/user/**").permitAll();

        return http.build();
    }
}
