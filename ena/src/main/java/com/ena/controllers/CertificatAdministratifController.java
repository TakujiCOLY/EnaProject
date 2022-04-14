package com.ena.controllers;

import com.ena.entities.CertificatAdministratif;
import com.ena.services.CertificatAdministratifService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/api/v1/certificatAdministratifs")
public class CertificatAdministratifController {
    public final CertificatAdministratifService service;

    public CertificatAdministratifController(CertificatAdministratifService service) {
        this.service = service;
    }

    @PostMapping(value = "/add")
    public ResponseEntity<CertificatAdministratif> add(@RequestBody CertificatAdministratif administratif) {
        CertificatAdministratif administratif1 = service.add(administratif);
        return new ResponseEntity<>(administratif1, HttpStatus.CREATED);
    }

    @PutMapping(value = "/update")
    public ResponseEntity<CertificatAdministratif> update(@RequestBody CertificatAdministratif administratif) {
        CertificatAdministratif administratif1 = service.update(administratif);
        return new ResponseEntity<>(administratif1, HttpStatus.OK);
    }
}
