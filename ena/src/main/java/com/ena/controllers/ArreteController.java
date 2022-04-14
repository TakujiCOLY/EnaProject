package com.ena.controllers;

import com.ena.entities.Arrete;
import com.ena.services.ArreteService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/api/arretes/v1")
public class ArreteController {
    private final ArreteService arreteService;

    public ArreteController(ArreteService arreteService) {
        this.arreteService = arreteService;
    }

    @PostMapping(value = "/add")
    public ResponseEntity<Arrete> add(@RequestBody Arrete arrete) {
        Arrete arrete1 = arreteService.add(arrete);
        return new ResponseEntity<>(arrete1, HttpStatus.CREATED);
    }

    @PutMapping(value = "/update")
    public ResponseEntity<Arrete> update(@RequestBody Arrete arrete) {
        Arrete arrete1 = arreteService.update(arrete);
        return new ResponseEntity<>(arrete1, HttpStatus.OK);
    }
}
