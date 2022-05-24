package com.book.BookManagement.Models;

import javax.validation.constraints.NotNull;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class BookModel {
	@Id
	private String id;
	@NotNull(message = "book name can not be null")
	private String bookName;
	private String desc;
	private Integer price;
	private String category;
	private Integer quantity;
	private String imageUrl;
	private String authorName;

	public BookModel() {
		super();
		// TODO Auto-generated constructor stub
	}

	public BookModel(String id, String bookName, String desc, Integer price, String category, Integer quantity,
			String imageUrl, String authorName) {
		super();
		this.id = id;
		this.bookName = bookName;
		this.desc = desc;
		this.price = price;
		this.category = category;
		this.quantity = quantity;
		this.imageUrl = imageUrl;
		this.authorName = authorName;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getBookName() {
		return bookName;
	}

	public void setBookName(String bookName) {
		this.bookName = bookName;
	}

	public String getDesc() {
		return desc;
	}

	public void setDesc(String desc) {
		this.desc = desc;
	}

	public Integer getPrice() {
		return price;
	}

	public void setPrice(Integer price) {
		this.price = price;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public Integer getQuantity() {
		return quantity;
	}

	public void setQuantity(Integer quantity) {
		this.quantity = quantity;
	}

	public String getImageUrl() {
		return imageUrl;
	}

	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}

	public String getAuthorName() {
		return authorName;
	}

	public void setAuthorName(String authorName) {
		this.authorName = authorName;
	}

	@Override
	public String toString() {
		return "BookModel [id=" + id + ", bookName=" + bookName + ", desc=" + desc + ", price=" + price + ", category="
				+ category + ", quantity=" + quantity + ", imageUrl=" + imageUrl + ", authorName=" + authorName + "]";
	}

}
