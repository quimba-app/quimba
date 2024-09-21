package com.quimba.backend.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

import static org.springframework.security.config.Customizer.withDefaults;

@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {

        http
                .authorizeRequests(authorize -> authorize
                .requestMatchers("/api/v1/tickets/buy", "/api/v1/tickets/sell").hasRole("USER") // Only users can buy or sell tickets
                .requestMatchers("/api/v1/admin/**").hasRole("ADMIN")
                .requestMatchers("/api/v1/user/register", "/api/v1/user/login").permitAll() // Allow public access to register/login
                .requestMatchers("/api/v1/user/**").authenticated() // Require authentication for all other user-related endpoints
                .anyRequest().authenticated())
                .csrf(csrf -> csrf.disable())
                .httpBasic(withDefaults());
        return http.build();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }


}
