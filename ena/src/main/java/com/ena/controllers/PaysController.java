package com.ena.controllers;

import com.ena.entities.Pays;
import com.ena.services.PaysService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/payses")
public class PaysController {
    public final PaysService service;

    public PaysController(PaysService service) {
        this.service = service;
    }

    @PostMapping("/add")
    public ResponseEntity<Pays> add(@RequestBody Pays pays) {
        Pays pays1 = service.add(pays);
        return new ResponseEntity<>(pays1, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<Pays> update(@RequestBody Pays pays) {
        Pays pays1 = service.update(pays);
        return new ResponseEntity<>(pays1, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") int id) {
        service.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/findAll")
    public ResponseEntity<List<Pays>> findAll() {
        List<Pays> pays = service.findAll();
        return new ResponseEntity<>(pays, HttpStatus.OK);
    }
}
