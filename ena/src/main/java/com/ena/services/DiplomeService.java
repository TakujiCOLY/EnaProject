package com.ena.services;

import com.ena.entities.Diplome;
import com.ena.repositories.DiplomeRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DiplomeService {
    private final DiplomeRepository repository;

    public DiplomeService(DiplomeRepository diplomeRepository) {
        this.repository = diplomeRepository;
    }

    public Diplome add(Diplome diplome) {
        return repository.save(diplome);
    }

    public Diplome update(Diplome diplome) {
        return repository.save(diplome);
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }

    public List<Diplome> findAll() {
        return repository.findAll();
    }
}
