package com.book.BookManagement.Service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.book.BookManagement.Models.UserModel;
import com.book.BookManagement.Repository.UserRepository;

@Service
public class UserSecService implements UserDetailsService {

	@Autowired
	UserRepository userRepo;

	@Override
	public UserDetails loadUserByUsername(String userName) throws UsernameNotFoundException {
		UserModel foundedUser = userRepo.findByUserName(userName);
		if (foundedUser == null)
			return null;

		String name = foundedUser.getUserName();
		String pwd = foundedUser.getPassword();

		return new User(name, pwd, new ArrayList<>());
	}

}