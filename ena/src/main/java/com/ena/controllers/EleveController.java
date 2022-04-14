package com.ena.controllers;

import com.ena.entities.Eleve;
import com.ena.services.EleveService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping(value = "/api/v1/eleves")
public class EleveController {
    public final EleveService service;

    public EleveController(EleveService service) {
        this.service = service;
    }

    @PostMapping(value = "/add")
    public ResponseEntity<Eleve> add(@RequestBody Eleve eleve) {
        Eleve eleve1 = service.add(eleve);
        return new ResponseEntity<>(eleve1, HttpStatus.CREATED);
    }

    @PutMapping(value = "/update")
    public ResponseEntity<Eleve> update(@RequestBody Eleve eleve) {
        Eleve eleve1 = service.update(eleve);
        return new ResponseEntity<>(eleve1, HttpStatus.OK);
    }

    @GetMapping(value = "/findOne/{id}")
    public ResponseEntity<Eleve> findOne(@PathVariable("id") Long id) {
        Eleve eleve = service.findById(id);
        return new ResponseEntity<>(eleve, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") Long id) {
        service.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping(value = "/findAll")
    public ResponseEntity<List<Eleve>> findAll() {
        List<Eleve> eleves = service.findAll();
        return new ResponseEntity<>(eleves, HttpStatus.OK);
    }
}
