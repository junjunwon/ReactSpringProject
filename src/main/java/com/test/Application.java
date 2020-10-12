package com.test;

import com.test.common.Object;
import com.test.repository.MainRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class Application implements CommandLineRunner {
    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }

    @Autowired
    private MainRepository mainRepository;

    @Override
    public void run(String... args) {
        this.mainRepository.save(new Object(3, "test now1", "abcde1"));
        this.mainRepository.save(new Object(4, "test now2", "abcde2"));
        this.mainRepository.save(new Object(5, "test now3", "abcde3"));

    }
}
