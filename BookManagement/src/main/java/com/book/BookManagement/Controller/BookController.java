package com.book.BookManagement.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.book.BookManagement.Models.BookModel;
import com.book.BookManagement.Service.BookService;

@RestController
@RequestMapping("/book")
@CrossOrigin(origins = "http://localhost:4200")
public class BookController {
	@Autowired
	BookService bookService;

	@PostMapping("/addbook")
	public ResponseEntity<?> addBook(@RequestBody BookModel book) {
		try {
			bookService.addBook(book);
			return new ResponseEntity<BookModel>(book, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.CONFLICT);
		}
	}

	@GetMapping("/getbooks")
	public ResponseEntity<?> getAllBooks() {
		List<BookModel> bookList = bookService.getBooksList();
		return new ResponseEntity<>(bookList, bookList.size() > 0 ? HttpStatus.OK : HttpStatus.NOT_FOUND);
	}

	@PutMapping("/updatebook")
	public ResponseEntity<?> updateBook(@RequestBody BookModel book) {
		try {
			bookService.updateBook(book);
			return new ResponseEntity<>("Updated Book With Book Id " + book.getId(), HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
		}
	}

	@DeleteMapping("/deletebook/{id}")
	public ResponseEntity<?> deleteBookById(@PathVariable String id) {
		try {
			bookService.deleteBookById(id);
			return new ResponseEntity("Successfully deleted book with id " + id, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
		}
	}

	@GetMapping("/bookcategory/{category}")
	public ResponseEntity<?> getBookByCategory(@PathVariable String category) {
		List<BookModel> bookListByCat = bookService.getBookByCategory(category);
		return new ResponseEntity<>(bookListByCat, bookListByCat.size() > 0 ? HttpStatus.OK : HttpStatus.NOT_FOUND);
	}
}
