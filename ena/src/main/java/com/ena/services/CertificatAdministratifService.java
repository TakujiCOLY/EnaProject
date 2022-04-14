package com.ena.services;

import com.ena.entities.CertificatAdministratif;
import com.ena.repositories.CertificatAdministratifRepository;
import org.springframework.stereotype.Service;

@Service
public class CertificatAdministratifService {
    private final CertificatAdministratifRepository repository;

    public CertificatAdministratifService(CertificatAdministratifRepository repository) {
        this.repository = repository;
    }

    public CertificatAdministratif add(CertificatAdministratif administratif) {
        return this.repository.save(administratif);
    }

    public CertificatAdministratif update(CertificatAdministratif administratif) {
        return this.repository.save(administratif);
    }
}
