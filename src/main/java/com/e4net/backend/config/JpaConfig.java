package com.e4net.backend.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@Configuration
@EnableJpaAuditing
public class JpaConfig {
    //단순히 JPA Auditing을 활성화 해주기 위한 클래스
    //BaseEntity를 상속받을 경우 자동으로 시간 생성
    //git update추가 메세지

}
