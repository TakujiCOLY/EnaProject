package com.ena.controllers;

import com.ena.entities.Echelon;
import com.ena.services.EchelonService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api/v1/echelons")
public class EchelonController {
    public final EchelonService service;

    public EchelonController(EchelonService service) {
        this.service = service;
    }

    @PostMapping(value = "/add")
    public ResponseEntity<Echelon> add(@RequestBody Echelon echelon) {
        Echelon echelon1 = service.add(echelon);
        return new ResponseEntity<>(echelon1, HttpStatus.CREATED);
    }

    @PutMapping(value = "/update")
    public ResponseEntity<Echelon> update(@RequestBody Echelon echelon) {
        Echelon echelon1 = service.update(echelon);
        return new ResponseEntity<>(echelon1, HttpStatus.OK);
    }

    @DeleteMapping(value = "/delete/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") int id) {
        service.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping(value = "/findAll")
    public ResponseEntity<List<Echelon>> findAll() {
        List<Echelon> echelons = service.findAll();
        return new ResponseEntity<>(echelons, HttpStatus.OK);
    }
}
