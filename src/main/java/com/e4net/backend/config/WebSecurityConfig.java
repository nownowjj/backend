package com.e4net.backend.config;

import com.e4net.backend.configjwt.JwtAuthenticationEntryPoint;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class WebSecurityConfig {

    //보안 resource에 인증되지 않은 접근 발생 시 401 에러 return
    //spring security의 AuthenticationEntryPoint interface를 implements
    @Autowired
    private JwtAuthenticationEntryPoint unauthorizedHandler;

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
                .exceptionHandling() //예외처리
                    .authenticationEntryPoint(unauthorizedHandler) //전달 예외처리
                    .and()
                .sessionManagement()
                    .sessionCreationPolicy(SessionCreationPolicy.STATELESS) //jwt token으로 인증하므로 세션 필요없음.
                    .and()
                .authorizeRequests()
                .mvcMatchers(HttpMethod.OPTIONS, "/**").permitAll()
                .antMatchers("/api/user/**").permitAll();

//        http.addFilterBefore(JwtAuthen)

        return http.build();
    }
}
