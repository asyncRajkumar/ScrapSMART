package com.scrapSmart.Scrapsamrt.controller;


import com.scrapSmart.Scrapsamrt.model.AuthLogin;
import com.scrapSmart.Scrapsamrt.model.AuthModel;
import com.scrapSmart.Scrapsamrt.repository.UserRepo;
import com.scrapSmart.Scrapsamrt.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class AuthController {

    @Autowired
    AuthService authService;
    @Autowired
    UserRepo userRepo;

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody AuthModel user) {
       return authService.register(user);
    }

    @GetMapping("/")
    public Object[] go() {
        return userRepo.findAll().toArray();
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody AuthLogin login) {
       return authService.login(login);
    }


}
