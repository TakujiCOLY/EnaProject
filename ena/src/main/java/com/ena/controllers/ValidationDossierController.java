package com.ena.controllers;

import com.ena.entities.ValidationDossier;
import com.ena.services.ValidationDossierService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api/v1/validationDossiers")
public class ValidationDossierController {
    public final ValidationDossierService service;

    public ValidationDossierController(ValidationDossierService service) {
        this.service = service;
    }

    @PostMapping(value = "/add")
    public ResponseEntity<ValidationDossier> add(@RequestBody ValidationDossier dossier) {
        ValidationDossier dossier1 = service.add(dossier);
        return new ResponseEntity<>(dossier1, HttpStatus.CREATED);
    }

    @PutMapping(value = "/update")
    public ResponseEntity<ValidationDossier> update(@RequestBody ValidationDossier dossier) {
        ValidationDossier dossier1 = service.update(dossier);
        return new ResponseEntity<>(dossier1, HttpStatus.OK);
    }
}
