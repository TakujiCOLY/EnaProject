package com.ena.controllers;

import com.ena.entities.Engagement;
import com.ena.services.EngagementService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/api/v1/engagements")
public class EngagementController {
    public final EngagementService service;

    public EngagementController(EngagementService service) {
        this.service = service;
    }

    @PostMapping(value = "/add")
    public ResponseEntity<Engagement> add(@RequestBody Engagement engagement) {
        Engagement engagement1 = service.add(engagement);
        return new ResponseEntity<>(engagement1, HttpStatus.CREATED);
    }

    @PutMapping(value = "/update")
    public ResponseEntity<Engagement> update(@RequestBody Engagement engagement) {
        Engagement engagement1 = service.update(engagement);
        return new ResponseEntity<>(engagement1, HttpStatus.OK);
    }
}
