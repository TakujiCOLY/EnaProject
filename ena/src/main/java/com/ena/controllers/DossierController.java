package com.ena.controllers;

import com.ena.entities.Dossier;
import com.ena.services.DossierService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/api/v1/dossiers")
public class DossierController {
    public final DossierService service;

    public DossierController(DossierService service) {
        this.service = service;
    }

    @PostMapping(value = "/add")
    public ResponseEntity<Dossier> add(@RequestBody Dossier dossier) {
        Dossier dossier1 = service.add(dossier);
        return new ResponseEntity<>(dossier1, HttpStatus.CREATED);
    }

    @PutMapping(value = "/update")
    public ResponseEntity<Dossier> update(@RequestBody Dossier dossier) {
        Dossier dossier1 = service.update(dossier);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping(value = "/findOne/{id}")
    public ResponseEntity<Dossier> findOne(@PathVariable("id") Long id) {
        Dossier dossier = service.findDossierById(id);
        return new ResponseEntity<>(dossier, HttpStatus.OK);
    }

    @DeleteMapping(value = "/delete/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") Long id) {
        service.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
