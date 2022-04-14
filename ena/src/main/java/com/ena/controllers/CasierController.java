package com.ena.controllers;

import com.ena.entities.Casier;
import com.ena.services.CasierService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/api/casiers/v1")
public class CasierController {
    public final CasierService casierService;

    public CasierController(CasierService casierService) {
        this.casierService = casierService;
    }

    @PostMapping(value = "/add")
    public ResponseEntity<Casier> add(@RequestBody Casier casier) {
        Casier casier1 = casierService.add(casier);
        return new ResponseEntity<>(casier1, HttpStatus.CREATED);
    }

    @PutMapping(value = "/update")
    public ResponseEntity<Casier> update(@RequestBody Casier casier) {
        Casier casier1 = casierService.update(casier);
        return new ResponseEntity<>(casier1, HttpStatus.OK);
    }
}
