package com.book.BookManagement.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.book.BookManagement.Models.AuthenticationResponse;
import com.book.BookManagement.Models.BookModel;
import com.book.BookManagement.Models.UserModel;
import com.book.BookManagement.Repository.UserRepository;
import com.book.BookManagement.Service.UserSecService;
import com.book.BookManagement.Service.UserService;
import com.book.BookManagement.utils.JwtUtils;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {

	@Autowired
	private UserRepository userRepo;

	@Autowired
	UserService userService;

	@Autowired
	private AuthenticationManager authenticationManager;

	@Autowired
	private UserSecService userSecService;

	@Autowired
	private JwtUtils jwtUtils;

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

	@PostMapping("/auth")
	private ResponseEntity<?> authenticateClient(@RequestBody UserModel user) {
		String username = user.getUserName();
		String password = user.getPassword();
		try {
			authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
//			return ResponseEntity.ok(new AuthenticationResponse("Succesfull authentication of client "+username));
		} catch (Exception e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
		}

		UserDetails loadedUser = userSecService.loadUserByUsername(username);
		String generatedToken = jwtUtils.generateToken(loadedUser);

		return ResponseEntity.ok(new AuthenticationResponse(generatedToken));

//		return ResponseEntity.ok(new AuthenticationResponse("Success"));
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

	@GetMapping("/cartdetails/{id}")
	public ResponseEntity<?> getCartBooks(@PathVariable String id) {
		List<BookModel> cartList = userService.getCartBooks(id);
		return new ResponseEntity<>(cartList, cartList.size() > 0 ? HttpStatus.OK : HttpStatus.NOT_FOUND);
	}
}
