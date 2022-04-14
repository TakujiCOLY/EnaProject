package com.ena.services;

import com.ena.entities.EleveCycle;
import com.ena.repositories.EleveCycleRepository;
import org.springframework.stereotype.Service;

@Service
public class EleveCycleService {
    private final EleveCycleRepository repository;

    public EleveCycleService(EleveCycleRepository eleveCycleRepository) {
        this.repository = eleveCycleRepository;
    }

    public EleveCycle add(EleveCycle cycle) {
        return this.repository.save(cycle);
    }

    public EleveCycle update(EleveCycle cycle) {
        return this.repository.save(cycle);
    }

    public void delete(Long id) {
        this.repository.deleteById(id);
    }
}
