package com.ena.controllers;

import com.ena.entities.EleveCycle;
import com.ena.services.EleveCycleService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/api/v1/eleveCycles")
public class EleveCycleController {
    public final EleveCycleService service;

    public EleveCycleController(EleveCycleService service) {
        this.service = service;
    }

    @PostMapping(value = "/add")
    public ResponseEntity<EleveCycle> add(@RequestBody EleveCycle cycle) {
        EleveCycle cycle1 = service.add(cycle);
        return new ResponseEntity<>(cycle1, HttpStatus.CREATED);
    }

    @PutMapping(value = "/update")
    public ResponseEntity<EleveCycle> update(@RequestBody EleveCycle cycle) {
        EleveCycle cycle1 = service.update(cycle);
        return new ResponseEntity<>(cycle1, HttpStatus.OK);
    }
}
