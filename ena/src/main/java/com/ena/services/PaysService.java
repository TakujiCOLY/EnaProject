package com.ena.services;

import com.ena.entities.Pays;
import com.ena.repositories.PaysRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PaysService {
    private final PaysRepository repository;

    public PaysService(PaysRepository paysRepository) {
        this.repository = paysRepository;
    }

    public Pays add(Pays pays) {
        return this.repository.save(pays);
    }

    public Pays update(Pays pays) {
        return this.repository.save(pays);
    }

    public void delete(Integer id) {
        this.repository.deleteById(id);
    }

    public List<Pays> findAll() {
        return this.repository.findAll();
    }
}
