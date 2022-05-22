package com.book.BookManagement.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.book.BookManagement.Models.BookModel;

public interface BookRepository extends MongoRepository<BookModel, String> {

}
