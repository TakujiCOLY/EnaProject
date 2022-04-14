package com.ena.controllers;

import com.ena.entities.EtatValidation;
import com.ena.services.EtatValidationService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api/v1/etatValidations")
public class EtatValidationController {
    public final EtatValidationService service;

    public EtatValidationController(EtatValidationService service) {
        this.service = service;
    }

    @PostMapping("/add")
    public ResponseEntity<EtatValidation> add(@RequestBody EtatValidation validation) {
        EtatValidation validation1 = service.add(validation);
        return new ResponseEntity<>(validation1, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<EtatValidation> update(@RequestBody EtatValidation validation) {
        EtatValidation validation1 = service.update(validation);
        return new ResponseEntity<>(validation1, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") int id) {
        service.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/findAll")
    public ResponseEntity<List<EtatValidation>> findAll() {
        List<EtatValidation> etatValidations = service.findAll();
        return new ResponseEntity<>(etatValidations, HttpStatus.OK);
    }
}
