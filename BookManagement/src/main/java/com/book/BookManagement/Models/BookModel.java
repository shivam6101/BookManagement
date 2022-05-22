package com.book.BookManagement.Models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class BookModel {
	@Id
	private String id;
	private String bookName;
	private String desc;
	private String price;
	private String category;
	private Integer quantity;
	private String imageUrl;
	
	
}
