package com.e4net.backend.configjwt;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

//JWT가 유효한 토큰인지 인증하는 filter
public class JwtAuthenticationFilter extends OncePerRequestFilter {

    //토큰 생성기
    @Autowired JwtTokenProvider jwtTokenProvider;

    @Autowired CustomUserDetailsService customUserDetailsService;

    //Request로 들어오는 Jwt Token의 유효성 검증(jwtTokenProvider.validateToken)하는 filter를
    //filterChain에 등록한다.
    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        try{
            //이 필터로 들어오는 request를 받아서 JWT를 가져온다?
            String jwt = getJwtFromRequest(request);

            if(StringUtils.hasText(jwt) && jwtTokenProvider.validateToken(jwt)) {
                //jwt토큰에서 회원구별 정보(username) 추출
                String userName = jwtTokenProvider.getUserIdFromJWT(jwt);
                //추출한 username으로 detail가져오기
                UserDetails userDetails = customUserDetailsService.loadUserByUsername(userName);
                //해당 username 계정에 대한 권한가져오기
                UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
                authentication.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
            }
        } catch (Exception ex) {
            ex.printStackTrace();
        }

        filterChain.doFilter(request, response);
    }

    //토큰을 가져오는 용도??
    private String getJwtFromRequest(HttpServletRequest request) {
        String bearerToken = request.getHeader("Authorization");
        if (StringUtils.hasText(bearerToken) && bearerToken.startsWith("Bearer ")) {
            return bearerToken.substring(7, bearerToken.length());
        }
        return null;
    }
}
