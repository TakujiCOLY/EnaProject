package com.ena.services;

import com.ena.entities.Statut;
import com.ena.repositories.StatutRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StatutService {
    private final StatutRepository repository;

    public StatutService(StatutRepository statutRepository) {
        this.repository = statutRepository;
    }

    public Statut add(Statut statut) {
        return this.repository.save(statut);
    }

    public Statut update(Statut statut) {
        return this.repository.save(statut);
    }

    public void delete(Integer id) {
        repository.deleteById(id);
    }

    public List<Statut> findAll() {
        return this.repository.findAll();
    }
}
