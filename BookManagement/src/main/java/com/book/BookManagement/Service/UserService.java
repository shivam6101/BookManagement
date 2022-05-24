package com.book.BookManagement.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.book.BookManagement.Models.BookModel;
import com.book.BookManagement.Models.UserModel;
import com.book.BookManagement.Repository.UserRepository;

@Service
public class UserService {

	@Autowired
	UserRepository userRepository;

	public UserModel addUser(UserModel user) {
		return userRepository.save(user);
	}

	public List<UserModel> getAllUsers() {
		return userRepository.findAll();
	}

	public Optional<UserModel> getUserById(String id) {
		return userRepository.findById(id);
	}

	public UserModel addBookToCart(BookModel book, Optional<UserModel> usr) {
		UserModel user = usr.get();
		List<BookModel> cartBooks = user.getUserCart();
		cartBooks.add(book);
		user.setUserCart(cartBooks);
		return userRepository.save(user);
	}

	public UserModel removeBookFromCart(BookModel book, Optional<UserModel> usr) {
		UserModel user = usr.get();
		List<BookModel> cartBooks = user.getUserCart();
		cartBooks.remove(book);
		user.setUserCart(cartBooks);
		return userRepository.save(user);
	}

}
