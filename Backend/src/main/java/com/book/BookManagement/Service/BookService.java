package com.book.BookManagement.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.book.BookManagement.Models.BookModel;
import com.book.BookManagement.Repository.BookRepository;

@Service
public class BookService {
	
	@Autowired
	BookRepository bookRepository;

	public void addBook(BookModel book) {
		bookRepository.insert(book);
	}

}
