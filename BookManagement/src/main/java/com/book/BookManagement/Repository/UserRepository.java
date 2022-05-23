package com.book.BookManagement.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.book.BookManagement.Models.UserModel;

public interface UserRepository extends MongoRepository<UserModel, String> {

}
