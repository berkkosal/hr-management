package com.kosalberk.hrmanagement.security;


import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfiguration {

    // "/" olarak tek bir path'e izin veriliyor. /** gerekli.
    // requestMatchers sıralamaları önemli. Bir request bir pattern'le eşleştikten sonra
    // geriye kalan hiçbir patterne bakılmıyor.

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http.authorizeHttpRequests(
                        (requests) -> requests
//                                .requestMatchers("/get-employees").authenticated()
                                .requestMatchers("/**").permitAll()
                )
                .csrf(AbstractHttpConfigurer::disable) //csrf
                .formLogin(Customizer.withDefaults())
                .httpBasic(Customizer.withDefaults());
        return http.build();
    }
}

