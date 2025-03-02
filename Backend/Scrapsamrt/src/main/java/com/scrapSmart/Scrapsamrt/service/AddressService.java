package com.scrapSmart.Scrapsamrt.service;

import com.scrapSmart.Scrapsamrt.model.Address;
import com.scrapSmart.Scrapsamrt.model.AuthModel;
import com.scrapSmart.Scrapsamrt.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class AddressService {

    @Autowired
    UserRepo userRepo;

    public ResponseEntity<?> saveAddress(Address address, String userName) {
        AuthModel user = userRepo.findByUserName(userName);

        if (user == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
        }

        List<Address> addresses = user.getAddresses();

        if (addresses == null) {
            addresses = new ArrayList<>();
        }

        addresses.add(address);
        user.setAddresses(addresses);

        userRepo.save(user);
        return ResponseEntity.ok("Address added successfully");
    }

    public ResponseEntity<?> getAllAddress(String userName) {
        AuthModel user = userRepo.findByUserName(userName);

        if (user == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
        }
        List<Address> addresses = user.getAddresses();
        if(addresses == null){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("No Address Found");
        }
        return ResponseEntity.status(HttpStatus.OK).body(addresses);

    }
}
