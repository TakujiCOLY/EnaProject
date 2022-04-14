package com.ena.controllers;

import com.ena.entities.Urgence;
import com.ena.services.UrgenceService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/api/v1/urgences")
public class UrgenceController {
    public final UrgenceService service;

    public UrgenceController(UrgenceService service) {
        this.service = service;
    }

    @PostMapping(value = "/add")
    public ResponseEntity<Urgence> add(@RequestBody Urgence urgence) {
        Urgence urgence1 = service.add(urgence);
        return new ResponseEntity<>(urgence1, HttpStatus.CREATED);
    }

    @PutMapping(value = "/update")
    public ResponseEntity<Urgence> update(@RequestBody Urgence urgence) {
        Urgence urgence1 = service.update(urgence);
        return new ResponseEntity<>(urgence1, HttpStatus.OK);
    }
}
