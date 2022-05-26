package com.book.BookManagement.Controller;

import java.util.List;
import java.util.Optional;

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
import com.book.BookManagement.Models.UserModel;
import com.book.BookManagement.Service.UserService;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {

	@Autowired
	UserService userService;

	@PostMapping()
	public ResponseEntity<?> addUser(@RequestBody UserModel user) {
		System.out.print(user);
		try {
			UserModel usr = userService.addUser(user);
			return new ResponseEntity<>(usr, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
		}
	}

	@PutMapping("/addbooktocart/{id}")
	public ResponseEntity<?> addBookToCart(@PathVariable String id, @RequestBody BookModel book) {
		try {
			Optional<UserModel> usr = userService.getUserById(id);
			UserModel user = userService.addBookToCart(book, usr);
			return new ResponseEntity<>("Book Added to cart succesfully", HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
		}
	}

	@DeleteMapping("/deletefromcart/{id}")
	public ResponseEntity<?> removeBookFromCart(@PathVariable String id, @RequestBody BookModel book) {
		try {
			Optional<UserModel> usr = userService.getUserById(id);
			UserModel user = userService.removeBookFromCart(book, usr);
			return new ResponseEntity<>("Book removed from cart", HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
		}
	}

	@GetMapping()
	public ResponseEntity<?> getUserDetails() {
		List<UserModel> usersList = userService.getAllUsers();
		return new ResponseEntity<>(usersList, usersList.size() > 0 ? HttpStatus.OK : HttpStatus.NOT_FOUND);
	}
}
