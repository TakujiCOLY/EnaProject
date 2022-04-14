package com.ena.controllers;

import com.ena.entities.Cycle;
import com.ena.services.CycleService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api/v1/cycles")
public class CycleController {
    public final CycleService service;

    public CycleController(CycleService service) {
        this.service = service;
    }

    @PostMapping(value = "/add")
    public ResponseEntity<Cycle> add(@RequestBody Cycle cycle) {
        Cycle cycle1 = service.add(cycle);
        return new ResponseEntity<>(cycle1, HttpStatus.CREATED);
    }

    @PutMapping(value = "/update")
    public ResponseEntity<Cycle> update(@RequestBody Cycle cycle) {
        Cycle cycle1 = service.update(cycle);
        return new ResponseEntity<>(cycle1, HttpStatus.OK);
    }

    @DeleteMapping(value = "/delete/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") int id) {
        service.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping(value = "/findAll")
    public ResponseEntity<List<Cycle>> findAll() {
        List<Cycle> cycles = service.findAll();
        return new ResponseEntity<>(cycles, HttpStatus.OK);
    }
}
