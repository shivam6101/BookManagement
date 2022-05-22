package com.book.BookManagement.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.book.BookManagement.Models.BookModel;
import com.book.BookManagement.Service.BookService;

@RestController
@RequestMapping("/book")
public class BookController {
	@Autowired
	BookService bookService;
	
	@PostMapping("/addbook")
	public ResponseEntity<?> addBook(@RequestBody BookModel book){
		try {
			bookService.addBook(book);
			return new ResponseEntity<BookModel>(book,HttpStatus.OK);
		}catch(Exception e) {
			return new ResponseEntity<>(e.getMessage(),HttpStatus.CONFLICT);
		}
	}
}
