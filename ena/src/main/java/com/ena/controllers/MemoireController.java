package com.ena.controllers;

import com.ena.entities.Memoire;
import com.ena.services.MemoireService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/memoires")
public class MemoireController {
    public final MemoireService service;

    public MemoireController(MemoireService service) {
        this.service = service;
    }

    @PostMapping("/add")
    public ResponseEntity<Memoire> add(@RequestBody Memoire memoire) {
        Memoire memoire1 = service.add(memoire);
        return new ResponseEntity<>(memoire1, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<Memoire> update(@RequestBody Memoire memoire) {
        Memoire memoire1 = service.update(memoire);
        return new ResponseEntity<>(memoire1, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") Long id) {
        service.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
