package com.ena.services;

import com.ena.entities.ValidationDossier;
import com.ena.repositories.ValidationDossierRepository;
import org.springframework.stereotype.Service;

@Service
public class ValidationDossierService {
    private final ValidationDossierRepository repository;

    public ValidationDossierService(ValidationDossierRepository validationDossierRepository) {
        this.repository = validationDossierRepository;
    }

    public ValidationDossier add(ValidationDossier dossier) {
        return this.repository.save(dossier);
    }

    public ValidationDossier update(ValidationDossier dossier) {
        return this.repository.save(dossier);
    }

    public void delete(Long id) {
        this.repository.deleteById(id);
    }
}
