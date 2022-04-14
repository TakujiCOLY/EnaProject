package com.ena.controllers;

import com.ena.entities.EleveSection;
import com.ena.services.EleveSectionService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/api/v1/eleveSections")
public class EleveSectionController {
    public final EleveSectionService service;

    public EleveSectionController(EleveSectionService service) {
        this.service = service;
    }

    @PostMapping(value = "/add")
    public ResponseEntity<EleveSection> add(@RequestBody EleveSection section) {
        EleveSection section1 = service.add(section);
        return new ResponseEntity<>(section1, HttpStatus.CREATED);
    }

    @PutMapping(value = "/update")
    public ResponseEntity<EleveSection> update(@RequestBody EleveSection section) {
        EleveSection section1 = service.update(section);
        return new ResponseEntity<>(section1, HttpStatus.OK);
    }
}
