package com.scrapSmart.Scrapsamrt.controller;
import com.scrapSmart.Scrapsamrt.model.AuthModel;
import com.scrapSmart.Scrapsamrt.model.Order;
import com.scrapSmart.Scrapsamrt.repository.OrderRepo;
import com.scrapSmart.Scrapsamrt.repository.UserRepo;
import com.scrapSmart.Scrapsamrt.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class OrderController {


    @Autowired
    OrderService orderService;

    @PostMapping("/{userName}/order")
    public ResponseEntity<?> createOrder(@RequestBody Order order, @PathVariable String userName) {
       return orderService.createOrder(order,userName);
    }

    @DeleteMapping("/{id}/deleteorder")
    public ResponseEntity<?> deleteOrder(@PathVariable String id){
        return orderService.deleteOrder(id);
    }

    @GetMapping("/{userName}/allorders")
    public ResponseEntity<?> getOrderByUserId(@PathVariable String userName){
return orderService.getOrderByUserId(userName);
    }
}
