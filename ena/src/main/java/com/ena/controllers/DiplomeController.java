package com.ena.controllers;

import com.ena.entities.Diplome;
import com.ena.services.DiplomeService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/api/v1/diplomes")
public class DiplomeController {
    public final DiplomeService service;

    public DiplomeController(DiplomeService service) {
        this.service = service;
    }

    @PostMapping(value = "/add")
    public ResponseEntity<Diplome> add(@RequestBody Diplome diplome) {
        Diplome diplome1 = service.add(diplome);
        return new ResponseEntity<>(diplome1, HttpStatus.CREATED);
    }

    @PutMapping(value = "/update")
    public ResponseEntity<Diplome> update(@RequestBody Diplome diplome) {
        Diplome diplome1 = service.update(diplome);
        return new ResponseEntity<>(diplome1, HttpStatus.OK);
    }

    @DeleteMapping(value = "/delete/{id}")
    public ResponseEntity<Diplome> delete(@PathVariable("id") Long id) {
        service.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
