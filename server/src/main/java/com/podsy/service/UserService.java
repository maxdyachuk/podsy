package com.podsy.service;

import com.podsy.entity.User;
import com.podsy.exception.UserException;
import com.podsy.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    private UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User addUser(User user) throws UserException {
        if (isEmailUsed(user.getEmail())) {
            throw new UserException("Email is already used");
        }
        return userRepository.save(user);
    }

    private boolean isEmailUsed(String email) {
        return userRepository.existsByEmail(email);
    }
}
