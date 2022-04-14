package com.ena.controllers;

import com.ena.entities.Promotion;
import com.ena.services.PromotionService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api/v1/promotions")
public class PromotionController {
    public final PromotionService service;

    public PromotionController(PromotionService service) {
        this.service = service;
    }

    @PostMapping(value = "/add")
    public ResponseEntity<Promotion> add(@RequestBody Promotion promotion) {
        Promotion promotion1 = service.add(promotion);
        return new ResponseEntity<>(promotion1, HttpStatus.CREATED);
    }

    @PutMapping(value = "/update")
    public ResponseEntity<Promotion> update(@RequestBody Promotion promotion) {
        Promotion promotion1 = service.update(promotion);
        return new ResponseEntity<>(promotion1, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") int id) {
        service.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/findAll")
    public ResponseEntity<List<Promotion>> findAll() {
        List<Promotion> promotions = service.findAll();
        return new ResponseEntity<>(promotions, HttpStatus.OK);
    }
}
