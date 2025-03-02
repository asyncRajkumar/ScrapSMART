package com.scrapSmart.Scrapsamrt.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.scrapSmart.Scrapsamrt.service.JwtUtil;
import org.springframework.security.core.Authentication;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler;
import org.springframework.stereotype.Component;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

@Component
public class OAuth2LoginSuccessHandler extends SimpleUrlAuthenticationSuccessHandler {

    private final JwtUtil jwtUtil;

    public OAuth2LoginSuccessHandler(JwtUtil jwtUtil) {
        this.jwtUtil = jwtUtil;
    }

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException {
        OAuth2User oAuth2User = (OAuth2User) authentication.getPrincipal();
        String username = oAuth2User.getAttribute("login"); // GitHub username

        String token = jwtUtil.generateToken(username , "User");

        Map<String, String> responseData = new HashMap<>();
        responseData.put("token", token);
        responseData.put("username", username);
        responseData.put("avatar_url", oAuth2User.getAttribute("avatar_url"));
        response.sendRedirect("http://localhost:5173/Dashboard?token=" + token);
        response.setContentType("application/json");
        new ObjectMapper().writeValue(response.getWriter(), responseData);


    }
}
