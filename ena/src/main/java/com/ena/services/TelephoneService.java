package com.ena.services;

import com.ena.entities.Telephone;
import com.ena.repositories.TelephoneRepository;
import org.springframework.stereotype.Service;

@Service
public class TelephoneService {
    private final TelephoneRepository repository;

    public TelephoneService(TelephoneRepository telephoneRepository) {
        this.repository = telephoneRepository;
    }

    public Telephone add(Telephone telephone) {
        return this.repository.save(telephone);
    }

    public Telephone update(Telephone telephone) {
        return this.repository.save(telephone);
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }
}
