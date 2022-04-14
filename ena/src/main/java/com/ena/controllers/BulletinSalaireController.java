package com.ena.controllers;

import com.ena.entities.BulletinSalaire;
import com.ena.services.BulletinSalaireService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/api/bulletinSalaires/v1")
public class BulletinSalaireController {
    private final BulletinSalaireService bulletinSalaireService;

    public BulletinSalaireController(BulletinSalaireService bulletinSalaireService) {
        this.bulletinSalaireService = bulletinSalaireService;
    }

    @PostMapping(value = "/add")
    public ResponseEntity<BulletinSalaire> add(@RequestBody BulletinSalaire bulletinSalaire) {
        BulletinSalaire bulletinSalaire1 = bulletinSalaireService.add(bulletinSalaire);
        return new ResponseEntity<>(bulletinSalaire1, HttpStatus.CREATED);
    }

    @PutMapping(value = "/update")
    public ResponseEntity<BulletinSalaire> update(@RequestBody BulletinSalaire bulletinSalaire) {
        BulletinSalaire bulletinSalaire1 = bulletinSalaireService.update(bulletinSalaire);
        return new ResponseEntity<>(bulletinSalaire1, HttpStatus.OK);
    }
}
