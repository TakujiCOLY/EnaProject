package com.ena.services;

import com.ena.entities.Arrete;
import com.ena.repositories.ArreteRepository;
import org.springframework.stereotype.Service;

@Service
public class ArreteService {
    private final ArreteRepository repository;

    public ArreteService(ArreteRepository arreteRepository) {
        this.repository = arreteRepository;
    }

    public Arrete add(Arrete arrete) {
        return this.repository.save(arrete);
    }

    public Arrete update(Arrete arrete) {
        return this.repository.save(arrete);
    }
}
