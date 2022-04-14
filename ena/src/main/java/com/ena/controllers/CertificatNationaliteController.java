package com.ena.controllers;

import com.ena.entities.CertificatNationalite;
import com.ena.services.CertificatNationaliteService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/api/v1/certificatNationalites")
public class CertificatNationaliteController {
    public final CertificatNationaliteService service;

    public CertificatNationaliteController(CertificatNationaliteService service) {
        this.service = service;
    }

    @PostMapping(value = "/add")
    public ResponseEntity<CertificatNationalite> add(@RequestBody CertificatNationalite nationalite) {
        CertificatNationalite nationalite1 = service.add(nationalite);
        return new ResponseEntity<>(nationalite1, HttpStatus.CREATED);
    }

    @PutMapping(value = "/update")
    public ResponseEntity<CertificatNationalite> update(@RequestBody CertificatNationalite nationalite) {
        CertificatNationalite nationalite1 = service.update(nationalite);
        return new ResponseEntity<>(nationalite1, HttpStatus.OK);
    }
}
