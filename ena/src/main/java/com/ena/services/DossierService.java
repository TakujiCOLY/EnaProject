package com.ena.services;

import com.ena.entities.Dossier;
import com.ena.exception.DossierNotFoundException;
import com.ena.repositories.DossierRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DossierService {
    private final DossierRepository repository;

    public DossierService(DossierRepository dossierRepository) {
        this.repository = dossierRepository;
    }

    public Dossier add(Dossier dossier) {
        return repository.save(dossier);
    }

    public Dossier update(Dossier dossier) {
        return repository.save(dossier);
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }

    public List<Dossier> findByEleveId(Long id) {
        return repository.findByEleveId(id);
    }

    public Dossier findDossierById(Long id) {
        return repository.findDossierById(id).orElseThrow(() -> new DossierNotFoundException("Dossier by id "+id+" was not found"));
    }
}
