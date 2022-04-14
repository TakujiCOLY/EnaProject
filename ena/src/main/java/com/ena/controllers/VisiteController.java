package com.ena.controllers;

import com.ena.entities.Visite;
import com.ena.services.VisiteService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/api/v1/visites")
public class VisiteController {
    public final VisiteService service;

    public VisiteController(VisiteService service) {
        this.service = service;
    }

    @PostMapping(value = "/add")
    public ResponseEntity<Visite> add(@RequestBody Visite visite) {
        Visite visite1 = service.add(visite);
        return new ResponseEntity<>(visite1, HttpStatus.CREATED);
    }

    @PutMapping(value = "/update")
    public ResponseEntity<Visite> update(@RequestBody Visite visite) {
        Visite visite1 = service.update(visite);
        return new ResponseEntity<>(visite1, HttpStatus.OK);
    }
}
