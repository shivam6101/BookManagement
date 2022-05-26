package com.book.BookManagement.Models;

public class Index {
	private Integer startIndex;
	private Integer endIndex;

	public Index() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Index(Integer startIndex, Integer endIndex) {
		super();
		this.startIndex = startIndex;
		this.endIndex = endIndex;
	}

	public Integer getStartIndex() {
		return startIndex;
	}

	public void setStartIndex(Integer startIndex) {
		this.startIndex = startIndex;
	}

	public Integer getEndIndex() {
		return endIndex;
	}

	public void setEndIndex(Integer endIndex) {
		this.endIndex = endIndex;
	}

	@Override
	public String toString() {
		return "Index [startIndex=" + startIndex + ", endIndex=" + endIndex + "]";
	}

}
