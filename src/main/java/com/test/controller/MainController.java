package com.test.controller;

import com.test.common.Object;
import com.test.repository.MainRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;

@RestController
@RequestMapping("api/")
public class MainController {

    @Autowired
    MainRepository mainRepository;

    Object object;

    @GetMapping("/objects")
    public List<Object> getObjects(){
        return this.mainRepository.findAll();
    }


    @RequestMapping(value = "/")
    public String test() {
        return "test";
    }

    @RequestMapping(value = "/hello")
    public HashMap hello() {
        HashMap result = new HashMap<>();
        result.put("message", "자바 통신");

        return result;
    }

    @RequestMapping(value = "/test")
    public HashMap testBye() {
        HashMap result = new HashMap();
        result.put("message", "자바 통신");
        object.setSystemId(1);
        long id=object.getSystemId();

        result.put("message", mainRepository.findById(id));
        return result;
    }
}
