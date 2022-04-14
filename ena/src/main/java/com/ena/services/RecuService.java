package com.ena.services;

import com.ena.entities.Recu;
import com.ena.repositories.RecuRepository;
import org.springframework.stereotype.Service;

@Service
public class RecuService {
    public final RecuRepository repository;

    public RecuService(RecuRepository recuRepository) {
        this.repository = recuRepository;
    }

    public Recu add(Recu recu) {
        return this.repository.save(recu);
    }

    public Recu update(Recu recu) {
        return this.repository.save(recu);
    }

    public void delete(Long id) {
        this.repository.deleteById(id);
    }
}
