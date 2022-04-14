package com.ena.controllers;

import com.ena.entities.Telephone;
import com.ena.services.TelephoneService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/api/v1/telephones")
public class TelephoneController {
    public final TelephoneService service;

    public TelephoneController(TelephoneService service) {
        this.service = service;
    }

    @PostMapping(value = "/add")
    public ResponseEntity<Telephone> add(@RequestBody Telephone telephone) {
        Telephone telephone1 = service.add(telephone);
        return new ResponseEntity<>(telephone1, HttpStatus.CREATED);
    }

    @PutMapping(value = "/update")
    public ResponseEntity<Telephone> update(@RequestBody Telephone telephone) {
        Telephone telephone1 = service.update(telephone);
        return new ResponseEntity<>(telephone1, HttpStatus.OK);
    }
}
