package com.scrapSmart.Scrapsamrt.repository;

import com.scrapSmart.Scrapsamrt.model.AuthModel;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepo extends MongoRepository<AuthModel,Integer> {

    AuthModel findByEmail(String email);
    AuthModel findByUserName(String username);
}
