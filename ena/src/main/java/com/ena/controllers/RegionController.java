package com.ena.controllers;

import com.ena.entities.Region;
import com.ena.services.RegionService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api/v1/regions")
public class RegionController {
    public final RegionService service;

    public RegionController(RegionService region) {
        this.service = region;
    }

    @PostMapping(value = "/add")
    public ResponseEntity<Region> add(@RequestBody Region region) {
        Region region1 = service.add(region);
        return new ResponseEntity<>(region1, HttpStatus.CREATED);
    }

    @PutMapping(value = "/update")
    public ResponseEntity<Region> update(@RequestBody Region region) {
        Region region1 = service.update(region);
        return new ResponseEntity<>(region1, HttpStatus.OK);
    }

    @DeleteMapping(value = "/delete/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") int id) {
        service.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping(value = "/findAll")
    public ResponseEntity<List<Region>> findAll() {
        List<Region> regions = service.findAll();
        return new ResponseEntity<>(regions, HttpStatus.OK);
    }

    @GetMapping(value = "/findByPays/{id}")
    public ResponseEntity<List<Region>> findByPaysId(@PathVariable("id") int id) {
        List<Region> regions = service.findByPaysId(id);
        return new ResponseEntity<>(regions, HttpStatus.OK);
    }
 }
