package com.scrapSmart.Scrapsamrt.controller;

import com.scrapSmart.Scrapsamrt.model.Address;
import com.scrapSmart.Scrapsamrt.service.AddressService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class AddressControll {

    @Autowired
    AddressService addressService;

    @PostMapping("/{userName}/add")
    public ResponseEntity<?> saveAddress(@PathVariable String userName, @RequestBody Address address) {
        return addressService.saveAddress(address, userName);
    }

    @GetMapping("{userName}/Addresses")
    public ResponseEntity<?> getAllAddress(@PathVariable String userName) {
        return addressService.getAllAddress( userName);
    }

}
