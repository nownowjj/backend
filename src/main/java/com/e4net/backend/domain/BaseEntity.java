package com.e4net.backend.domain;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedBy;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.EntityListeners;
import javax.persistence.MappedSuperclass;
import java.time.LocalDateTime;

@Getter
@MappedSuperclass
@EntityListeners(AuditingEntityListener.class)
public abstract class BaseEntity {
    /**
     * @MappedSuperclass
     * 상속관계 매핑이 아니다
     * 이 어노테이션이 선언되어 있는 클래스는 엔티티가 아니다
     * 단순히 부모 클래스를 상속 받는 자식 클래스에게 매핑정보만 제공
     * 직접 생성해서 사용할 일이 없으므로 추상 클래스로 만드는 것을 권장
     * 테이블과 관계가 없고, 단순히 엔티티가 공통으로 사용하는 매핑 정보를
     * 모으는 역할
     * 주로 등록일, 수정일, 등록자, 수정자 같은 전체 엔티티에서 공통으로
     * 적용하는 정보를 모을 때 사용한다.
     *
     * JPA에서 @Entity 클래스는 @Entity나 @MappedSuperclass로 지정한
     * 클래스만 상속 가능
     */

//    @CreatedBy
//    private String createdBy;
    @CreatedDate
    private LocalDateTime createdDate;
//    @LastModifiedBy
//    private String lastModifiedBy;
    @LastModifiedDate
    private LocalDateTime lastModifiedDate;
}
