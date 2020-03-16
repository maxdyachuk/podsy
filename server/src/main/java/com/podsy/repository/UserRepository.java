package com.podsy.repository;

import com.podsy.entity.User;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface UserRepository extends CrudRepository<User, Long> {

    boolean existsByEmail(String email);
    Optional<User> findUserByEmail(String email);
}
