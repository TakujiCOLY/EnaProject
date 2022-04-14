package com.ena.controllers;

import com.ena.entities.VoieAcces;
import com.ena.services.VoieAccesService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api/v1/voieAcceses")
public class VoieAccesController {
    public final VoieAccesService service;

    public VoieAccesController(VoieAccesService service) {
        this.service = service;
    }

    @PostMapping(value = "/add")
    public ResponseEntity<VoieAcces> add(@RequestBody VoieAcces acces) {
        VoieAcces acces1 = service.add(acces);
        return new ResponseEntity<>(acces1, HttpStatus.CREATED);
    }

    @PutMapping(value = "/update")
    public ResponseEntity<VoieAcces> update(@RequestBody VoieAcces acces) {
        VoieAcces acces1 = service.update(acces);
        return new ResponseEntity<>(acces1, HttpStatus.OK);
    }

    @DeleteMapping(value = "/delete/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") int id) {
        service.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping(value = "/findAll")
    public ResponseEntity<List<VoieAcces>> findAll() {
        List<VoieAcces> acces = service.findAll();
        return new ResponseEntity<>(acces, HttpStatus.OK);
    }
}
