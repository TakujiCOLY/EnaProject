package com.ena.controllers;

import com.ena.entities.ElevePromotion;
import com.ena.services.ElevePromotionService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/api/v1/elevePromotions")
public class ElevePromotionController {
    public final ElevePromotionService service;

    public ElevePromotionController(ElevePromotionService service) {
        this.service = service;
    }

    @PostMapping(value = "/add")
    public ResponseEntity<ElevePromotion> add(@RequestBody ElevePromotion promotion) {
        ElevePromotion promotion1 = service.add(promotion);
        return new ResponseEntity<>(promotion1, HttpStatus.CREATED);
    }

    @PutMapping(value = "/update")
    public ResponseEntity<ElevePromotion> update(@RequestBody ElevePromotion promotion) {
        ElevePromotion promotion1 = service.update(promotion);
        return new ResponseEntity<>(promotion1, HttpStatus.OK);
    }
}
