package com.book.BookManagement.Models;

import java.util.ArrayList;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class UserModel {
	@Id
	private String id;
	private String userName;
	private String password;
	private String email;
	private List<BookModel> userCart = new ArrayList<>();
	private String role = "user";

	public UserModel() {
		super();
		// TODO Auto-generated constructor stub
	}

	public UserModel(String id, String userName, String password, String email, List<BookModel> userCart, String role) {
		super();
		this.id = id;
		this.userName = userName;
		this.password = password;
		this.email = email;
		this.userCart = userCart;
		this.role = role;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public List<BookModel> getUserCart() {
		return userCart;
	}

	public void setUserCart(List<BookModel> userCart) {
		this.userCart = userCart;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	@Override
	public String toString() {
		return "UserModel [id=" + id + ", userName=" + userName + ", password=" + password + ", email=" + email
				+ ", userCart=" + userCart + ", role=" + role + "]";
	}

}
