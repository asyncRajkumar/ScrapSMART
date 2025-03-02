package com.scrapSmart.Scrapsamrt.repository;

import com.scrapSmart.Scrapsamrt.model.AuthModel;
import com.scrapSmart.Scrapsamrt.model.Order;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrderRepo extends MongoRepository<Order,String> {
    List<Order> findByUser(AuthModel user);
}
