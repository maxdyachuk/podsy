package com.podsy.service;

import java.util.ArrayList;

import com.podsy.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class JwtUserDetailsService implements UserDetailsService {

    private UserRepository userRepository;

    @Autowired
    public JwtUserDetailsService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        com.podsy.entity.User user = userRepository.findUserByEmail(username)
                .orElseThrow(() ->  new UsernameNotFoundException("User not found with username: " + username));
        return new User(user.getEmail(), user.getPassword(), new ArrayList<>());
    }
}
