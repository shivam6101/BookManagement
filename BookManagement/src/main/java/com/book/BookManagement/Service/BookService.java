package com.book.BookManagement.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
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

	public List<BookModel> getBooksList() {
		return bookRepository.findAll();
	}

	public void deleteBookById(String id) {
		bookRepository.deleteById(id);

	}

	public void updateBook(BookModel book) {
		bookRepository.save(book);
	}

	public List<BookModel> getBookByCategory(String category) {
		return bookRepository.findByCategory(category);
	}

	public Page<BookModel> booksPage(int startIndex, int endIndex) {
		PageRequest pageRequest = PageRequest.of(startIndex, endIndex);
		return bookRepository.findAll(pageRequest);
	}

	public long getTotalBooks() {
		return bookRepository.count();
	}

}
