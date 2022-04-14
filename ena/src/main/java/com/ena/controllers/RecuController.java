package com.ena.controllers;

import com.ena.entities.Recu;
import com.ena.services.RecuService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/api/v1/recus")
public class RecuController {
    public final RecuService service;

    public RecuController(RecuService service) {
        this.service = service;
    }

    @PostMapping(value = "/add")
    public ResponseEntity<Recu> add(@RequestBody Recu recu) {
        Recu recu1 = service.add(recu);
        return new ResponseEntity<>(recu1, HttpStatus.CREATED);
    }

    @PutMapping(value = "/update")
    public ResponseEntity<Recu> update(@RequestBody Recu recu) {
        Recu recu1 = service.update(recu);
        return new ResponseEntity<>(recu1, HttpStatus.OK);
    }

    @DeleteMapping(value = "/delete/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") Long id) {
        service.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
