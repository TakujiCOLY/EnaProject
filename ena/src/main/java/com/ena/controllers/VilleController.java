package com.ena.controllers;

import com.ena.entities.Ville;
import com.ena.services.VilleService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api/v1/villes")
public class VilleController {
    public final VilleService service;

    public VilleController(VilleService service) {
        this.service = service;
    }

    @PostMapping(value = "/add")
    public ResponseEntity<Ville> add(@RequestBody Ville ville) {
        Ville ville1 = service.add(ville);
        return new ResponseEntity<>(ville1, HttpStatus.CREATED);
    }

    @PutMapping(value = "/update")
    public ResponseEntity<Ville> update(@RequestBody Ville ville) {
        Ville ville1 = service.update(ville);
        return new ResponseEntity<>(ville1, HttpStatus.OK);
    }

    @GetMapping(value = "/findByRegion/{id}")
    public ResponseEntity<List<Ville>> findByRegionId(@PathVariable("id") int id) {
        List<Ville> villes = service.findByRegionId(id);
        return new ResponseEntity<>(villes, HttpStatus.OK);
    }

    @GetMapping(value = "/findAll")
    public ResponseEntity<List<Ville>> findAll() {
        List<Ville> villes = service.findAll();
        return new ResponseEntity<>(villes, HttpStatus.OK);
    }
}
