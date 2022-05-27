package com.book.BookManagement.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.book.BookManagement.Models.UserModel;

@Repository
public interface UserRepository extends MongoRepository<UserModel, String> {
	UserModel findByUserName(String userName);
}
