package com.book.BookManagement.Repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.book.BookManagement.Models.BookModel;

public interface BookRepository extends MongoRepository<BookModel, String> {

	@Query("{'category':?0}")
	List<BookModel> findByCategory(String category);

}
