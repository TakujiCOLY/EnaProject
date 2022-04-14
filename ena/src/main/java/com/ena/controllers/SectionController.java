package com.ena.controllers;

import com.ena.entities.Section;
import com.ena.services.SectionService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api/v1/sections")
public class SectionController {
    public final SectionService service;

    public SectionController(SectionService service) {
        this.service = service;
    }

    @PostMapping(value = "/add")
    public ResponseEntity<Section> add(@RequestBody Section section) {
        Section section1 = service.add(section);
        return new ResponseEntity<>(section1, HttpStatus.CREATED);
    }

    @PutMapping(value = "/update")
    public ResponseEntity<Section> update(@RequestBody Section section) {
        Section section1 = service.update(section);
        return new ResponseEntity<>(section1, HttpStatus.OK);
    }

    @DeleteMapping(value = "/delete/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") int id) {
        service.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping(value = "/findAll")
    public ResponseEntity<List<Section>> findAll() {
        List<Section> sections = service.findAll();
        return new ResponseEntity<>(sections, HttpStatus.OK);
    }
}
