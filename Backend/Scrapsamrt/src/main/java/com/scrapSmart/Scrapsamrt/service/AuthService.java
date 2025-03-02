package com.scrapSmart.Scrapsamrt.service;

import com.scrapSmart.Scrapsamrt.model.AuthLogin;
import com.scrapSmart.Scrapsamrt.model.AuthModel;
import com.scrapSmart.Scrapsamrt.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    @Autowired
    BCryptPasswordEncoder bCryptPasswordEncoder;
    @Autowired
    UserRepo userRepo;
    @Autowired
    AuthenticationManager authenticationManager;
    @Autowired
    JwtUtil jwtUtil;

    private BCryptPasswordEncoder encoder = new BCryptPasswordEncoder(12);

    public ResponseEntity<?> register(AuthModel user) {
        user.setPassword(encoder.encode(user.getPassword()));// Encrypt password
        userRepo.save(user);
        return ResponseEntity.status(HttpStatus.CREATED).body("Success");
    }

    public ResponseEntity<?> login(AuthLogin login) {
        AuthModel user = userRepo.findByUserName(login.getUserName());
        if (user == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("User not found");
        }

        // Check password
        if (!bCryptPasswordEncoder.matches(login.getPassword(), user.getPassword())) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
        }

        // Authenticate user
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(login.getUserName(), login.getPassword()));

        if (authentication.isAuthenticated()) {
            String token = jwtUtil.generateToken(login.getUserName(), user.getRoles());
            return ResponseEntity.ok(token);
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Authentication failed");
        }
    }
}
