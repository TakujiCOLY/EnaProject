package com.ena.services;

import com.ena.entities.Casier;
import com.ena.repositories.CasierRepository;
import org.springframework.stereotype.Service;

@Service
public class CasierService {
    private final CasierRepository repository;

    public CasierService(CasierRepository casierRepository) {
        this.repository = casierRepository;
    }

    public Casier add(Casier casier) {
        return this.repository.save(casier);
    }

    public Casier update(Casier casier) {
        return this.repository.save(casier);
    }


}
