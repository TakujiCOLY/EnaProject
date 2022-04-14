package com.ena.services;

import com.ena.entities.Urgence;
import com.ena.repositories.UrgenceRepository;
import org.springframework.stereotype.Service;

@Service
public class UrgenceService {
    private final UrgenceRepository repository;

    public UrgenceService(UrgenceRepository urgenceRepository) {
        this.repository = urgenceRepository;
    }

    public Urgence add(Urgence urgence) {
        return this.repository.save(urgence);
    }

    public Urgence update(Urgence urgence) {
        return this.repository.save(urgence);
    }

    public void delete(Long id) {
        this.repository.deleteById(id);
    }
}
