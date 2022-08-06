package com.e4net.backend.configjwt;

import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.stereotype.Component;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Slf4j
@Component
public class JwtAuthenticationEntryPoint implements AuthenticationEntryPoint {
    //AuthenticationEntryPoint는 commence() - 미인증 사용자 접근 시 예외 처리를 제공
    //commence 개시하다, 시작되다.
    @Override
    public void commence(HttpServletRequest request, HttpServletResponse response, AuthenticationException authException) throws IOException, ServletException {
        log.error("Responding with unauthorized error. Message - {}", authException.getMessage());
        //SC_UNATUHORIZED는 401에러 의미 (인증 관련)
        response.sendError(response.SC_UNAUTHORIZED, authException.getMessage());
    }
}
