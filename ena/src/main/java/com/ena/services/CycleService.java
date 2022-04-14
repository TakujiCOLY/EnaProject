package com.ena.services;

import com.ena.entities.Cycle;
import com.ena.repositories.CycleRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CycleService {
    private final CycleRepository repository;

    public CycleService(CycleRepository cycleRepository) {
        this.repository = cycleRepository;
    }

    public Cycle add(Cycle cycle) {
        return this.repository.save(cycle);
    }

    public Cycle update(Cycle cycle) {
        return this.repository.save(cycle);
    }

    public void delete(Integer id) {
        this.repository.deleteById(id);
    }

    public List<Cycle> findAll() {
        return this.repository.findAll();
    }
}
