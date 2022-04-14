package com.ena.services;

import com.ena.entities.Hierarchie;
import com.ena.repositories.HierarchieRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HierarchieService {
    private final HierarchieRepository repository;

    public HierarchieService(HierarchieRepository hierarchieRepository) {
        this.repository = hierarchieRepository;
    }

    public Hierarchie add(Hierarchie hierarchie) {
        return this.repository.save(hierarchie);
    }

    public Hierarchie update(Hierarchie hierarchie) {
        return this.repository.save(hierarchie);
    }

    public void delete(Integer id) {
        this.repository.deleteById(id);
    }

    public List<Hierarchie> findAll() {
        return this.repository.findAll();
    }
}
