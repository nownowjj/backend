package com.e4net.backend.configjwt;

import io.jsonwebtoken.*;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.Authentication;

import java.util.Date;


//JWT 토큰 생성 및 유효성 검증 컴포넌트
@Slf4j
public class JwtTokenProvider {
    //JWT 비밀번호와 유효기간
    private final static String JWT_SECRET = "JWTSuperSecretKey";
    private final static int JWT_EXPIRATION_MS = 1000 * 60 * 60;

    //JWT 토큰 생성하기
    public String generateToken(Authentication authentication) {

        Date now = new Date();
        Date expiredDate = new Date(now.getTime() + JWT_EXPIRATION_MS);

        //사용자
        //현재 시간 기반으로 생성
        //만료 시간 세팅
        //사용할 암호화 알고리즘, signauture에 들어갈 secret 값 세팅
       return Jwts.builder()
                .setSubject((String) authentication.getPrincipal())
                .setIssuedAt(new Date())
                .setExpiration(expiredDate)
                .signWith(SignatureAlgorithm.ES512, JWT_SECRET)
                .compact();
    }

    //JWT 토큰에서 아이디 추출
    public String getUserIdFromJWT(String token){
        //JWT_SECRET키와 토큰 이용해서 body(payload)부분을 가져오는것 같다.
        Claims claims = Jwts.parser()
                .setSigningKey(JWT_SECRET)
                .parseClaimsJws(token)
                .getBody();

        return claims.getSubject();
    }

    //JWT 토큰 유효성 검사
    public boolean validateToken(String token) {
        try {
            Jwts.parser().setSigningKey(JWT_SECRET).parseClaimsJws(token);
            return true;
        } catch (SignatureException ex) {
            log.error("Invalid JWT signature");
        } catch (MalformedJwtException ex) {
            log.error("Invalid JWT token");
        } catch (ExpiredJwtException ex) {
            log.error("Expired JWT token");
        } catch (UnsupportedJwtException ex) {
            log.error("Unsupported JWT token");
        } catch (IllegalArgumentException ex) {
            log.error("JWT claims string is empty.");
        }
        return false;
    }
}









