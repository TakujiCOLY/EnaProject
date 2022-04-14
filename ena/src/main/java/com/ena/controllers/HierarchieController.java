package com.ena.controllers;

import com.ena.entities.Hierarchie;
import com.ena.services.HierarchieService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/hierarchies")
public class HierarchieController {
    public final HierarchieService service;

    public HierarchieController(HierarchieService service) {
        this.service = service;
    }

    @PostMapping("/add")
    public ResponseEntity<Hierarchie> add(@RequestBody Hierarchie hierarchie) {
        Hierarchie hierarchie1 = service.add(hierarchie);
        return new ResponseEntity<>(hierarchie1, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<Hierarchie> update(@RequestBody Hierarchie hierarchie) {
        Hierarchie hierarchie1 = service.update(hierarchie);
        return new ResponseEntity<>(hierarchie1, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Hierarchie> delete(@PathVariable("id") int id) {
        service.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/findAll")
    public ResponseEntity<List<Hierarchie>> findAll() {
        List<Hierarchie> hierarchies = service.findAll();
        return new ResponseEntity<>(hierarchies, HttpStatus.OK);
    }
}
