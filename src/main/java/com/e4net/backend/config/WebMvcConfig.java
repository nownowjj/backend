package com.e4net.backend.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebMvcConfig implements WebMvcConfigurer {
    //08/05 WebMvcConfig 생성

    //CORS를 방지해준다.
    //해당 url은 허가된다.
    @Override
    public void addCorsMappings(CorsRegistry corsRegistry){
        corsRegistry.addMapping("/**")
                .allowedOrigins("http://localhost:3000")
                .allowedMethods("OPTION", "GET", "POST", "PUT", "DELETE");
    }
}
