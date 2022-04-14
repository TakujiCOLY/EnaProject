package com.ena.services;

import com.ena.entities.EtatValidation;
import com.ena.repositories.EtatValidationRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EtatValidationService {
    private final EtatValidationRepository repository;

    public EtatValidationService(EtatValidationRepository etatValidationRepository) {
        this.repository = etatValidationRepository;
    }

    public EtatValidation add(EtatValidation validation) {
        return this.repository.save(validation);
    }

    public EtatValidation update(EtatValidation validation) {
        return this.repository.save(validation);
    }

    public void delete(Integer id) {
        this.repository.deleteById(id);
    }

    public List<EtatValidation> findAll() {
        return this.repository.findAll();
    }
}
