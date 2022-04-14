package com.ena.services;

import com.ena.entities.Echelon;
import com.ena.repositories.EchelonRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EchelonService {
    private final EchelonRepository repository;

    public EchelonService(EchelonRepository echelonRepository) {
        this.repository = echelonRepository;
    }

    public Echelon add(Echelon echelon) {
        return repository.save(echelon);
    }

    public Echelon update(Echelon echelon) {
        return repository.save(echelon);
    }

    public void delete(Integer id) {
        repository.deleteById(id);
    }

    public List<Echelon> findAll() {
        return repository.findAll();
    }
}
