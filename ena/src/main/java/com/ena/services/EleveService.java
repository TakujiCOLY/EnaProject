package com.ena.services;

import com.ena.entities.Eleve;
import com.ena.exception.EleveNotFoundException;
import com.ena.repositories.EleveRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EleveService {
    private final EleveRepository repository;

    public EleveService(EleveRepository eleveRepository) {
        this.repository = eleveRepository;
    }

    public Eleve add(Eleve eleve) {
        return repository.save(eleve);
    }

    public Eleve update(Eleve eleve) {
        return repository.save(eleve);
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }

    public Eleve findById(Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new EleveNotFoundException("Eleve by id " + id + " was not found"));
    }

    public List<Eleve> findAll() {
        return repository.findAll();
    }

}
