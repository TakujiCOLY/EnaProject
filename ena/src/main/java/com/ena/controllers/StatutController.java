package com.ena.controllers;

import com.ena.entities.Statut;
import com.ena.services.StatutService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api/v1/statuts")
public class StatutController {
    public final StatutService service;

    public StatutController(StatutService service) {
        this.service = service;
    }

    @PostMapping(value = "/add")
    public ResponseEntity<Statut> add(@RequestBody Statut statut) {
        Statut statut1 = service.add(statut);
        return new ResponseEntity<>(statut1, HttpStatus.CREATED);
    }

    @PutMapping(value = "/update")
    public ResponseEntity<Statut> update(@RequestBody Statut statut) {
        Statut statut1 = service.update(statut);
        return new ResponseEntity<>(statut1, HttpStatus.OK);
    }

    @DeleteMapping(value = "/delete/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") int id) {
        service.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping(value = "/findAll")
    public ResponseEntity<List<Statut>> findAll() {
        List<Statut> statuts = service.findAll();
        return new ResponseEntity<>(statuts, HttpStatus.OK);
    }
}
