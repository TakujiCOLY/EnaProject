package com.ena.controllers;

import com.ena.entities.Adresse;
import com.ena.services.AdresseService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/api/v1/adresses")
public class AdresseController {
    private final AdresseService adresseService;

    public AdresseController(AdresseService adresseService) {
        this.adresseService = adresseService;
    }

    @PostMapping("/add")
    public ResponseEntity<Adresse> add(@RequestBody Adresse adresse) {
        Adresse adresse1 = adresseService.add(adresse);
        return new ResponseEntity<>(adresse1, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<Adresse> update(@RequestBody Adresse adresse) {
        Adresse adresse1 = adresseService.update(adresse);
        return new ResponseEntity<>(adresse1, HttpStatus.OK);
    }
}
