package com.ena.services;

import com.ena.entities.CertificatNationalite;
import com.ena.repositories.CertificatNationaliteRepository;
import org.springframework.stereotype.Service;

@Service
public class CertificatNationaliteService {
    private final CertificatNationaliteRepository repository;

    public CertificatNationaliteService(CertificatNationaliteRepository certificatNationaliteRepository) {
        this.repository = certificatNationaliteRepository;
    }

    public CertificatNationalite add(CertificatNationalite nationalite) {
        return this.repository.save(nationalite);
    }

    public CertificatNationalite update(CertificatNationalite nationalite) {
        return this.repository.save(nationalite);
    }
}
