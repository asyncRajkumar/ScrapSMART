package com.scrapSmart.Scrapsamrt.service;


import com.scrapSmart.Scrapsamrt.model.AuthModel;
import com.scrapSmart.Scrapsamrt.model.Order;
import com.scrapSmart.Scrapsamrt.repository.OrderRepo;
import com.scrapSmart.Scrapsamrt.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class OrderService {

    @Autowired
    OrderRepo orderRepo;
    @Autowired
    UserRepo userRepo;

    public ResponseEntity<?> createOrder(Order order, String userName) {
        AuthModel user = userRepo.findByUserName(userName);
        System.out.println(user);

        if (user == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found!");
        }

        if (user.getAddresses() == null || user.getAddresses().isEmpty()) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("User has no saved addresses!");
        }

        order.setUser(user);
        orderRepo.save(order);

        return ResponseEntity.status(HttpStatus.CREATED).body(order);

    }

    public ResponseEntity<?> deleteOrder(String id) {
        Optional<Order> order = orderRepo.findById(id);
        System.out.println(order);
        if (order.isPresent()){
            orderRepo.deleteById(id);
            return ResponseEntity.status(HttpStatus.OK).body(order+" Order deleted successfully");
        }
        else return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Order not found");
    }

    public ResponseEntity<?> getOrderByUserId(String userName) {
        AuthModel user = userRepo.findByUserName(userName);
        if (user == null) {
            return ResponseEntity.badRequest().body("User not found!");
        }
        List<Order> orders = orderRepo.findByUser(user);
        return ResponseEntity.ok(orders);

    }
}
