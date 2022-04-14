package com.ena.services;

import com.ena.entities.Adresse;
import com.ena.repositories.AdresseRepository;
import org.springframework.stereotype.Service;

@Service
public class AdresseService {
    private final AdresseRepository repository;

    public AdresseService(AdresseRepository adresseRepository) {
        this.repository = adresseRepository;
    }

    public Adresse add(Adresse adresse) {
        return this.repository.save(adresse);
    }

    public Adresse update(Adresse adresse) {
        return this.repository.save(adresse);
    }
}
