package com.ena.controllers;

import com.ena.entities.Corps;
import com.ena.services.CorpsService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api/v1/corpses")
public class CorpsController {
    private final CorpsService service;

    public CorpsController(CorpsService service) {
        this.service = service;
    }

    @PostMapping(value = "/add")
    public ResponseEntity<Corps> add(@RequestBody Corps corps) {
        Corps corps1 = service.add(corps);
        return new ResponseEntity<>(corps1, HttpStatus.CREATED);
    }

    @PutMapping(value = "/update")
    public ResponseEntity<Corps> update(@RequestBody Corps corps) {
        Corps corps1 = service.update(corps);
        return new ResponseEntity<>(corps1, HttpStatus.OK);
    }

    @DeleteMapping(value = "/delete/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") int id) {
        service.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping(value = "/findAll")
    public ResponseEntity<List<Corps>> findAll() {
        List<Corps> corps = service.findAll();
        return new ResponseEntity<>(corps, HttpStatus.OK);
    }
}
