package com.ena.services;

import com.ena.entities.EleveSection;
import com.ena.repositories.EleveSectionRepository;
import org.springframework.stereotype.Service;

@Service
public class EleveSectionService {
    private final EleveSectionRepository repository;

    public EleveSectionService(EleveSectionRepository eleveSectionRepository) {
        this.repository = eleveSectionRepository;
    }

    public EleveSection add(EleveSection section) {
        return this.repository.save(section);
    }

    public EleveSection update(EleveSection section) {
        return this.repository.save(section);
    }

    public void delete(Long id) {
        this.repository.deleteById(id);
    }
}
